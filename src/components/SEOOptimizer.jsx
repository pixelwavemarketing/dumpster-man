import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Normalize canonical URL - remove trailing slashes (except root), remove query params, lowercase
const normalizeCanonicalUrl = (url) => {
  if (!url) return url;
  
  try {
    const urlObj = new URL(url);
    // Remove query parameters
    urlObj.search = '';
    // Remove hash
    urlObj.hash = '';
    // Normalize pathname - remove trailing slash except for root
    let pathname = urlObj.pathname;
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    urlObj.pathname = pathname;
    
    return urlObj.toString();
  } catch (e) {
    // If URL parsing fails, return as-is
    return url;
  }
};

const SEOOptimizer = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  structuredDataType = 'default' 
}) => {
  const location = useLocation();

  // Normalize canonical URL if provided
  const normalizedCanonicalUrl = canonicalUrl ? normalizeCanonicalUrl(canonicalUrl) : null;

  // If props are provided, use Helmet for SEO
  if (title || description || keywords || normalizedCanonicalUrl) {
    return (
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {normalizedCanonicalUrl && <link rel="canonical" href={normalizedCanonicalUrl} />}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        
        {/* Open Graph */}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        {normalizedCanonicalUrl && <meta property="og:url" content={normalizedCanonicalUrl} />}
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    );
  }

  // Only handle fallback SEO for pages that don't provide canonical URL via props
  useEffect(() => {
    // Only run this effect if no canonical URL was provided via props
    if (normalizedCanonicalUrl) return;

    const updateSEO = () => {
      const path = location.pathname;
      const baseUrl = 'https://thedumpsterman518.com';
      // Normalize path - remove trailing slash except for root
      let normalizedPath = path === '/' ? '' : path.replace(/\/$/, '');
      const currentCanonicalUrl = normalizeCanonicalUrl(`${baseUrl}${normalizedPath}`);

      // Only set canonical URL if Helmet hasn't already set one
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = currentCanonicalUrl;

      // Ensure proper meta robots tag (only if not set by Helmet)
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
        
        // Set robots content based on page type
        if (path.startsWith('/assets/') || path.match(/\.(webp|png|jpg|jpeg|gif|svg|ico|css|js)$/)) {
          robotsMeta.content = 'noindex, nofollow';
        } else {
          robotsMeta.content = 'index, follow';
        }
      }

      // Add language attribute to html tag
      document.documentElement.lang = 'en';
    };

    updateSEO();
  }, [location, normalizedCanonicalUrl]);

  return null; // This component doesn't render anything when used as fallback
};

export default SEOOptimizer;