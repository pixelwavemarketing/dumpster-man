const CACHE_NAME = 'dumpsterman-v3';
const STATIC_CACHE_NAME = 'dumpsterman-static-v3';

// Install event - cache static resources only
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Opened static cache');
        // Only cache truly static resources, not index.html or hashed assets
        return cache.addAll([
          '/manifest.json',
          '/favicon.ico'
        ]);
      })
  );
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Fetch event - network-first strategy for dynamic content
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(event.request.url);
  const isIndexHtml = url.pathname === '/' || url.pathname === '/index.html';
  const isAsset = url.pathname.startsWith('/assets/');
  const isHashedFile = /-[a-zA-Z0-9]{8,}\.(js|css)$/.test(url.pathname);

  // Network-first strategy for index.html and hashed assets (they change with each build)
  if (isIndexHtml || isAsset || isHashedFile) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Only cache successful responses, and never cache index.html
          if (response && response.status === 200 && response.type === 'basic' && !isIndexHtml) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // If network fails, try cache as fallback (for offline support)
          return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If both fail, return offline message
            return new Response('Content not available offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain',
              }),
            });
          });
        })
    );
    return;
  }

  // Cache-first strategy for truly static resources (favicon, manifest, etc.)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(fetchResponse => {
          if (fetchResponse && fetchResponse.status === 200 && fetchResponse.type === 'basic') {
            const responseToCache = fetchResponse.clone();
            caches.open(STATIC_CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return fetchResponse;
        });
      })
      .catch(() => {
        return new Response('Offline content not available', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain',
          }),
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Claim all clients immediately to activate new service worker
      return self.clients.claim();
    })
  );
}); 