import PropTypes from 'prop-types';
import siteConfig from '../config/siteConfig.js';

// Component to inject structured data
const StructuredData = ({ type = 'localBusiness' }) => {
  const getSchema = () => {
    try {
      switch (type) {
        case 'localBusiness':
          return generateLocalBusinessSchema();
        case 'service':
          return generateServiceSchema();
        case 'faq':
          return generateFAQSchema();
        case 'product':
          return generateProductSchema();
        case 'organization':
          return generateOrganizationSchema();
        case 'aiOptimized':
          return generateAIOptimizedSchema();
        default:
          return generateLocalBusinessSchema();
      }
    } catch (error) {
      console.error('Error generating schema:', error);
      return {};
    }
  };

  const schema = getSchema();
  
  if (!schema || Object.keys(schema).length === 0) {
    return null;
  }

  // Return the JSON string directly for use in Helmet
  return JSON.stringify(schema);
};

StructuredData.propTypes = {
  type: PropTypes.oneOf(['localBusiness', 'service', 'faq', 'product', 'organization', 'aiOptimized'])
};

// Schema generation functions
function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thedumpsterman518.com",
    "name": siteConfig.company.name,
    "alternateName": "The Dumpster Man 518",
    "description": "Professional dumpster rental service in Albany NY and Capital Region. Same-day delivery, competitive pricing, multiple dumpster sizes for residential and commercial projects.",
    "url": siteConfig.company.website,
    "telephone": siteConfig.company.phone,
    "email": siteConfig.company.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.company.address.street,
      "addressLocality": siteConfig.company.address.city,
      "addressRegion": siteConfig.company.address.state,
      "postalCode": siteConfig.company.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.company.coordinates.latitude,
      "longitude": siteConfig.company.coordinates.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD",
    "areaServed": siteConfig.serviceAreas.regions,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.company.coordinates.latitude,
        "longitude": siteConfig.company.coordinates.longitude
      },
      "geoRadius": "30"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dumpster Rental Services",
      "itemListElement": siteConfig.dumpsters.map(dumpster => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": dumpster.name,
          "description": dumpster.description,
          "category": "Waste Management",
          "serviceType": "Dumpster Rental"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": dumpster.pricing.basePrice,
          "priceCurrency": "USD"
        }
      }))
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61558249876337",
      "https://www.yelp.com/biz/the-dumpster-man-mechanicville"
    ]
  };
}

function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dumpster Rental Service",
    "description": "Professional dumpster rental services in Albany NY and Capital Region",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.company.name
    },
    "areaServed": siteConfig.serviceAreas.regions,
    "serviceType": "Waste Management",
    "category": "Construction and Demolition Waste",
    "offers": siteConfig.dumpsters.map(dumpster => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": dumpster.name,
        "description": dumpster.description,
        "category": "Dumpster Rental"
      }
    }))
  };
}

function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dumpster Sizes and Pricing",
    "description": "Available dumpster sizes for rental in Albany NY and Capital Region",
    "itemListElement": siteConfig.dumpsters.map((dumpster, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": dumpster.name,
        "description": dumpster.description,
        "category": "Dumpster Rental",
        "brand": {
          "@type": "Brand",
          "name": siteConfig.company.name
        },
        "offers": {
          "@type": "Offer",
          "price": dumpster.pricing.basePrice,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "LocalBusiness",
            "name": siteConfig.company.name
          }
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Capacity",
            "value": dumpster.capacity
          },
          {
            "@type": "PropertyValue",
            "name": "Dimensions",
            "value": dumpster.dimensions
          },
          {
            "@type": "PropertyValue",
            "name": "Weight Limit",
            "value": dumpster.weightLimit
          }
        ]
      }
    }))
  };
}

function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.company.name,
    "url": siteConfig.company.website,
    "logo": "https://thedumpsterman518.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.company.phone,
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61558249876337",
      "https://www.yelp.com/biz/the-dumpster-man-mechanicville"
    ]
  };
}

function generateAIOptimizedSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.company.name,
    "description": siteConfig.aiContent.businessType,
    "industry": siteConfig.aiContent.industry,
    "serviceType": siteConfig.aiContent.services,
    "targetAudience": siteConfig.aiContent.targetAudience,
    "commonQuestions": siteConfig.aiContent.commonQuestions,
    "relatedServices": siteConfig.aiContent.relatedServices,
    "semanticKeywords": siteConfig.seoStrategy.aiOptimization.semanticKeywords,
    "entityTypes": siteConfig.seoStrategy.aiOptimization.entityTypes,
    "contentStructure": siteConfig.seoStrategy.aiOptimization.contentStructure,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.company.address.street,
      "addressLocality": siteConfig.company.address.city,
      "addressRegion": siteConfig.company.address.state,
      "postalCode": siteConfig.company.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.company.coordinates.latitude,
      "longitude": siteConfig.company.coordinates.longitude
    },
    "telephone": siteConfig.company.phone,
    "email": siteConfig.company.email,
    "url": siteConfig.company.website
  };
}

export default StructuredData; 