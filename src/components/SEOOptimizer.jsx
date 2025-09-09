import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SEOOptimizer = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  structuredDataType = 'default' 
}) => {
  const location = useLocation();

  // If props are provided, use Helmet for SEO
  if (title || description || keywords || canonicalUrl) {
    return (
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        
        {/* Open Graph */}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    );
  }

  // Fallback: Update SEO based on current route (for pages that don't use props)
  useEffect(() => {
    const updateSEO = () => {
      const path = location.pathname;
      const baseUrl = 'https://thedumpsterman518.com';
      const currentCanonicalUrl = `${baseUrl}${path === '/' ? '' : path}`;

      // Set canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = currentCanonicalUrl;

      // Ensure proper meta robots tag
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      
      // Set robots content based on page type
      if (path.startsWith('/assets/') || path.match(/\.(webp|png|jpg|jpeg|gif|svg|ico|css|js)$/)) {
        robotsMeta.content = 'noindex, nofollow';
      } else {
        robotsMeta.content = 'index, follow';
      }

      // Add language attribute to html tag
      document.documentElement.lang = 'en';
    };

    updateSEO();
  }, [location]);

  return null; // This component doesn't render anything when used as fallback
};

export default SEOOptimizer;