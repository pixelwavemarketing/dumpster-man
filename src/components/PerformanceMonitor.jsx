import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      let lcpObserver, fidObserver, clsObserver, fcpObserver, resourceObserver;

      // Monitor Largest Contentful Paint (LCP)
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics if needed
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime)
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
            
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000) / 1000
              });
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor First Contentful Paint (FCP)
      fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        console.log('FCP:', firstEntry.startTime);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(firstEntry.startTime)
          });
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Monitor resource loading
      resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const duration = entry.responseEnd - entry.startTime;
            if (duration > 1000) {
              console.warn('Slow resource:', entry.name, duration + 'ms');
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      return () => {
        // Cleanup observers
        if (lcpObserver) lcpObserver.disconnect();
        if (fidObserver) fidObserver.disconnect();
        if (clsObserver) clsObserver.disconnect();
        if (fcpObserver) fcpObserver.disconnect();
        if (resourceObserver) resourceObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 