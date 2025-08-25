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
  
  // Ensure the canonical URL matches exactly what Google is crawling
  const canonicalUrl = `https://thedumpsterman518.com/service-areas/${areaSlug}`;

  return (
    <>
      <Helmet>
        <title>{`Dumpster Rental in ${areaName}, NY | The Dumpster Man 518`}</title>
        <meta name="description" content={`Professional dumpster rental services in ${areaName}, NY. Same-day delivery, competitive pricing, multiple dumpster sizes for residential and commercial projects.`} />
        <meta name="keywords" content={`dumpster rental ${areaName}, dumpster rental NY, waste management ${areaName}, construction dumpster ${areaName}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content={areaName} />
        
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
          {StructuredData({ type: "localBusiness" })}
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Why Choose The Dumpster Man 518 in {areaName}?</h2>
          <div className="section-content">
            <p>We're your local waste management experts in {areaName}, NY, providing reliable dumpster rental services with same-day delivery and competitive pricing. Our team understands the unique needs of {areaName} residents and businesses, ensuring you get the right dumpster size for your project.</p>
            <p>With years of experience serving the Capital Region, we've built a reputation for professionalism, reliability, and exceptional customer service. Whether you're tackling a home renovation, construction project, or residential cleanout, our experienced team ensures efficient service and exceptional customer care.</p>
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
                <div className="image-container">
                  <img src={dumpster.image} alt={dumpster.name} />
                  <div className="overlay">
                    <p>{dumpster.description}</p>
                  </div>
                </div>
                <h3>{dumpster.name}</h3>
                <p className="text-gray-600 text-sm mb-4 px-6">{dumpster.description}</p>
                <p className="text-blue-600 font-semibold px-6 pb-6">Starting at {dumpster.pricing.basePrice}</p>
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
