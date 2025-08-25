import { Link } from 'react-router-dom';
import SEOOptimizer from '../components/SEOOptimizer.jsx';
import siteConfig from '../config/siteConfig.js';

const ServiceAreas = () => {
  return (
    <>
      <SEOOptimizer
        title="Dumpster Rental Service Areas | Albany NY Capital Region | The Dumpster Man 518"
        description="Professional dumpster rental services throughout the Capital Region including Albany, Troy, Clifton Park, Saratoga Springs, Schenectady, Mechanicville, Ballston Spa, and Waterford NY."
        keywords="dumpster rental service areas, Albany NY dumpster rental, Troy NY dumpster rental, Clifton Park dumpster rental, Capital Region dumpster rental"
        canonicalUrl="https://thedumpsterman518.com/service-areas"
        structuredDataType="localBusiness"
      />
      
      {/* Hero Section */}
      <section className="full-width-section primary-section header-spacing" style={{ marginTop: '150px' }}>
        <div className="content-wrapper text-center">
          <h1>Dumpster Rental Service Areas</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Serving the Capital Region of New York
            </h2>
            <p className="text-blue-700">
              We provide professional dumpster rental services throughout the Capital Region with same-day delivery, 
              competitive pricing, and exceptional customer service. Call us at {siteConfig.company.phone} for immediate service.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Our Service Areas</h2>
          <div className="services-grid">
            {siteConfig.serviceAreas.regions.map((area, index) => {
              const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={index} className="service-item">
                  <h3>{area}</h3>
                  <p className="text-gray-600 mb-4 px-6">
                    Professional dumpster rental services in {area}, NY with same-day delivery and competitive pricing.
                  </p>
                  <div className="space-y-2 mb-4 px-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      Same-day delivery available
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      Multiple dumpster sizes
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      Competitive pricing
                    </div>
                  </div>
                  <Link
                    to={`/service-areas/${areaSlug}`}
                    className="cta-button mx-6 mb-6"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <h2>Need a Dumpster in Your Area?</h2>
          <div className="section-content">
            <p>Don't see your area listed? We may still be able to serve you! Contact us to check availability 
            and get a free quote for your project.</p>
          </div>
          <div className="cta-container">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="cta-button"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="cta-button"
              style={{ marginLeft: '1rem' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Why Choose The Dumpster Man 518?</h2>
          <div className="seo-grid">
            <div className="seo-item">
              <h3>Local Expertise</h3>
              <div className="section-content">
                <p>Based in Mechanicville, NY, we understand the local regulations and requirements for waste management in the Capital Region.</p>
              </div>
            </div>
            <div className="seo-item">
              <h3>Fast Service</h3>
              <div className="section-content">
                <p>Same-day delivery and pickup available throughout our service area to keep your project on schedule.</p>
              </div>
            </div>
            <div className="seo-item">
              <h3>Competitive Pricing</h3>
              <div className="section-content">
                <p>Transparent pricing with no hidden fees. Get the best value for your dumpster rental needs.</p>
              </div>
            </div>
            <div className="seo-item">
              <h3>Professional Service</h3>
              <div className="section-content">
                <p>Licensed, insured, and experienced team providing safe and reliable dumpster rental services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreas;
