import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import siteConfig from '../config/siteConfig.js';
import StructuredData from '../components/StructuredData.jsx';

const ServiceArea = () => {
  const { area } = useParams();
  
  // Find the service area data
  const serviceArea = siteConfig.serviceAreas.regions.find(
    region => region.toLowerCase().replace(/\s+/g, '-') === area
  );
  
  // Debug logging to help identify issues
  console.log('URL Parameter (area):', area);
  console.log('Found Service Area:', serviceArea);
  console.log('Canonical URL:', `https://thedumpsterman518.com/service-areas/${area}`);

  if (!serviceArea) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Service Area Not Found</h1>
        <p>We're sorry, but this service area is not currently served.</p>
      </div>
    );
  }

  const areaName = serviceArea;
  const areaSlug = area; // This should match the URL parameter exactly
  
  // Get unique content for this specific service area
  const areaContent = siteConfig.serviceAreas.areaContent[areaName] || {
    description: `Professional dumpster rental services in ${areaName}, NY. Same-day delivery, competitive pricing, multiple dumpster sizes for residential and commercial projects.`,
    highlights: ["Professional service", "Same-day delivery", "Competitive pricing", "Local expertise"],
    localInfo: `${areaName} is part of the Capital Region, offering diverse project types and waste management needs.`,
    popularProjects: ["Home renovations", "Construction projects", "Residential cleanouts", "Commercial waste"]
  };
  
  // Ensure the canonical URL matches exactly what Google is crawling
  const canonicalUrl = `https://thedumpsterman518.com/service-areas/${areaSlug}`;

  return (
    <>
      <Helmet>
        <title>{`Dumpster Rental in ${areaName}, NY | The Dumpster Man 518`}</title>
        <meta name="description" content={areaContent.description} />
        <meta name="keywords" content={`dumpster rental ${areaName}, dumpster rental NY, waste management ${areaName}, construction dumpster ${areaName}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="google" content="notranslate" />
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content={areaName} />
        <meta name="geo.position" content={`${siteConfig.company.coordinates.latitude};${siteConfig.company.coordinates.longitude}`} />
        <meta name="ICBM" content={`${siteConfig.company.coordinates.latitude}, ${siteConfig.company.coordinates.longitude}`} />
        <meta name="author" content="The Dumpster Man 518" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="content-language" content="en-US" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Dumpster Rental in ${areaName}, NY | The Dumpster Man 518`} />
        <meta property="og:description" content={`Professional dumpster rental services in ${areaName}, NY. Same-day delivery, competitive pricing.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Dumpster Rental in ${areaName}, NY`} />
        <meta name="twitter:description" content={`Professional dumpster rental services in ${areaName}, NY.`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `The Dumpster Man 518 - ${areaName}`,
            "description": areaContent.description,
            "url": canonicalUrl,
            "telephone": siteConfig.company.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": areaName,
              "addressRegion": "NY",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": siteConfig.company.coordinates.latitude,
              "longitude": siteConfig.company.coordinates.longitude
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": siteConfig.company.coordinates.latitude,
                "longitude": siteConfig.company.coordinates.longitude
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dumpster Rental Services",
              "itemListElement": siteConfig.dumpsters.map(dumpster => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": dumpster.name,
                  "description": dumpster.description
                }
              }))
            },
            "openingHours": siteConfig.company.hours,
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="full-width-section primary-section header-spacing" style={{ marginTop: '150px' }}>
        <div className="content-wrapper text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Dumpster Rental in {areaName}, NY
          </h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-blue-700 text-lg">
              <strong>Same-day delivery available in {areaName}!</strong> Call us at {siteConfig.company.phone} for immediate service.
            </p>
          </div>
          
          {/* Area-specific highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
            {areaContent.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Why Choose The Dumpster Man 518 in {areaName}?</h2>
          <div className="section-content">
            <p>{areaContent.description}</p>
            <p>{areaContent.localInfo}</p>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <h2>Popular Dumpster Sizes in {areaName}</h2>
          <div className="services-grid">
            {siteConfig.dumpsters.slice(0, 3).map((dumpster, index) => (
              <div key={index} className="service-item">
                <h3>{dumpster.name}</h3>
                <p className="text-gray-600 text-sm mb-4 px-6">{dumpster.description}</p>
                <div className="px-6 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-semibold text-gray-700">Capacity:</span> {dumpster.capacity}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Dimensions:</span> {dumpster.dimensions}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Weight Limit:</span> {dumpster.weightLimit}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Common Uses:</span>
                      <ul className="mt-1 space-y-1">
                        {dumpster.commonUses.slice(0, 2).map((use, useIndex) => (
                          <li key={useIndex} className="text-xs">• {use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold px-6 pb-6">Starting at {dumpster.pricing.basePrice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Projects Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Popular Projects in {areaName}</h2>
          <div className="section-content">
            <p>Our team in {areaName} specializes in these common project types, ensuring you get the right dumpster size and expert guidance for your specific needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-6xl mx-auto">
            {areaContent.popularProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 text-2xl mb-3">🏗️</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{project}</h3>
                <p className="text-gray-600 text-sm">Expert guidance and the right dumpster size for {project.toLowerCase()} in {areaName}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Service Areas Near {areaName}</h2>
          <div className="section-content">
            <p>We serve {areaName} and the surrounding Capital Region, ensuring fast delivery and reliable service throughout the area. Our local expertise means we understand the unique challenges of projects in {areaName} and can provide personalized solutions for your waste management needs.</p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Nearby Service Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {siteConfig.serviceAreas.regions.slice(0, 8).map((region, index) => (
                <a
                  key={index}
                  href={`/service-areas/${region.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl px-4 py-4 text-center text-blue-700 hover:text-blue-900 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-400 transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 text-base md:text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                  <span className="relative z-10">{region}</span>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-400 group-hover:w-12 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <h2>Ready to Rent a Dumpster in {areaName}?</h2>
          <div className="section-content">
            <p>Call us today at {siteConfig.company.phone} for immediate service or fill out our contact form for a free quote. Our team is ready to help you choose the right dumpster size and get your project started quickly.</p>
          </div>
          <div className="cta-container">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="cta-button"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="cta-button"
              style={{ marginLeft: '1rem' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
