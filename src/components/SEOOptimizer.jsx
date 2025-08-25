import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import siteConfig from '../config/siteConfig.js';
import StructuredData from './StructuredData.jsx';

const SEOOptimizer = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  structuredDataType = 'localBusiness',
  ogImage = 'https://thedumpsterman518.com/hero-truck.webp',
  ogType = 'website'
}) => {
  // Generate default values if not provided
  const defaultTitle = title || siteConfig.company.name;
  const defaultDescription = description || siteConfig.company.description;
  const defaultKeywords = keywords || 'dumpster rental, waste management, Albany NY, Capital Region';
  const defaultCanonical = canonicalUrl || `https://thedumpsterman518.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="author" content={siteConfig.company.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={defaultCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:url" content={defaultCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={defaultTitle} />
      <meta property="og:site_name" content={siteConfig.company.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={defaultTitle} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="Albany, New York" />
      <meta name="geo.position" content={`${siteConfig.company.coordinates.latitude};${siteConfig.company.coordinates.longitude}`} />
      <meta name="ICBM" content={`${siteConfig.company.coordinates.latitude}, ${siteConfig.company.coordinates.longitude}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {StructuredData({ type: structuredDataType })}
      </script>
      
      {/* Additional Schema for Local Business */}
      {structuredDataType === 'localBusiness' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://thedumpsterman518.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": window.location.pathname.split('/').pop() || 'Page',
                "item": defaultCanonical
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

SEOOptimizer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  structuredDataType: PropTypes.oneOf(['localBusiness', 'service', 'faq', 'product', 'organization', 'aiOptimized']),
  ogImage: PropTypes.string,
  ogType: PropTypes.string
};

export default SEOOptimizer;
