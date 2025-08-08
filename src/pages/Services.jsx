import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig.js'
import StructuredData from '../components/StructuredData.jsx'
import OptimizedImage from '../components/OptimizedImage.jsx'

// Import images dynamically
import lot16 from '../assets/images/16lot.webp'
import yard16 from '../assets/images/16.webp'
import yard20 from '../assets/images/20.webp'
import yard25 from '../assets/images/25.webp'

// Map images to dumpster IDs
const imageMap = {
  '12-yard': lot16,
  '16-yard': yard16,
  '20-yard': yard20,
  '25-yard': yard25
}

function Services() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>{siteConfig.seoContent.services.title}</title>
        <meta name="description" content={siteConfig.seoContent.services.description} />
        <meta name="keywords" content={siteConfig.seoContent.services.keywords} />
        <link rel="canonical" href="https://thedumpsterman518.com/dumpster-sizes/" />
        
        <script type="application/ld+json">
          {StructuredData({ type: "product" })}
        </script>
        <script type="application/ld+json">
          {StructuredData({ type: "service" })}
        </script>
      </Helmet>

      <div className="services-page">
        <div className="services-spacer"></div>
        <div className="page-container">
          <div className="services-header">
            <h1>Our Dumpster Sizes</h1>
            <div className="header-underline"></div>
            <p className="services-subtitle">Find the right dumpster size for your project</p>
          </div>
          

          <div className="services-grid">
            {siteConfig.dumpsters.map((dumpster, index) => (
              <div className="service-item" key={dumpster.id}>
                <div 
                  className={`image-container ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  <OptimizedImage 
                    src={imageMap[dumpster.id]} 
                    alt={dumpster.name} 
                    asImg={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="overlay">
                    <p className="service-description">{dumpster.description}</p>
                  </div>
                </div>
                <h3>{dumpster.name}</h3>
              </div>
            ))}
          </div>

          {/* Detailed Information Section */}
          <section className="full-width-section secondary-section">
            <div className="content-wrapper text-center">
              <h2>{siteConfig.contentSections.services.detailedInfo.title}</h2>
              <div className="section-content">
                <p>{siteConfig.contentSections.services.detailedInfo.content}</p>
              </div>
            </div>
          </section>

          {/* Pricing Information Section */}
          <section className="full-width-section primary-section">
            <div className="content-wrapper text-center">
              <h2>Transparent Pricing for Mechanicville NY Dumpster Rental</h2>
              <div className="section-content">
                <p>We believe in transparent pricing with no hidden fees, ensuring you know exactly what your dumpster rental will cost. Our pricing is competitive within the Mechanicville NY market and varies based on dumpster size, rental duration, and project location. We offer flexible rental periods to accommodate your project timeline, and our team works with you to find the most cost-effective solution for your specific needs.</p>
                <p>Additional fees may apply for certain items like mattresses and tires, and we provide clear information about these charges upfront. For projects outside our standard service area, we offer extended service with additional fees clearly communicated. Our goal is to provide exceptional value while maintaining the high-quality service our customers expect. Contact us today for a detailed quote tailored to your specific project requirements.</p>
              </div>
            </div>
          </section>

          {/* Project Planning Section */}
          <section className="full-width-section secondary-section">
            <div className="content-wrapper text-center">
              <h2>Expert Project Planning and Guidance</h2>
              <div className="section-content">
                <p>Choosing the right dumpster size is crucial for the success of your project and your budget. Our comprehensive guide helps you understand the capacity, dimensions, and best uses for each dumpster size we offer. The 12-yard dumpster is ideal for small residential projects like garage cleanouts or minor renovations, while the 16-yard option works well for medium-sized home renovations and construction debris removal.</p>
                <p>For larger projects, our 20-yard dumpsters handle commercial cleanouts and major renovations, and our 25-yard dumpsters are perfect for large-scale construction and demolition projects. Each size is designed with specific project types in mind, ensuring you get the most efficient and cost-effective solution for your needs. Our experienced team provides personalized guidance to help you choose the perfect dumpster size for your specific project requirements.</p>
              </div>
            </div>
          </section>

          <div className="additional-costs">
            <h2>Additional Fees & Restrictions</h2>
            <div className="costs-grid">
              <div className="costs-section">
                <h3>Additional Charges</h3>
                <ul>
                  {siteConfig.additionalFees.charges.map((charge, index) => (
                    <li key={index}>{charge.item}: {charge.price}</li>
                  ))}
                </ul>
              </div>
              <div className="costs-section">
                <h3>Prohibited Items</h3>
                <ul>
                  {siteConfig.additionalFees.prohibitedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>



          <section className="full-width-section primary-section">
            <div className="content-wrapper text-center">
              <h2>Ready to Get Started?</h2>
              <div className="section-content">
                <p>Contact us today for a free quote and exceptional service</p>
              </div>
              <div className="cta-container">
                <Link to="/contact" className="cta-button">
                  Get Your Dumpster Today →
                </Link>
              </div>
            </div>
          </section>

          <div className="service-area">
            <div className="service-area-content">
              <h2>Capital Region Service Area</h2>
              <div className="area-info">
                <i className="location-icon">📍</i>
                <p>Based in <strong>{siteConfig.serviceAreas.primary}, NY</strong>, serving:</p>
              </div>
              <div className="service-locations">
                <ul>
                  {siteConfig.serviceAreas.regions.map((region, index) => (
                    <li key={index}>{region}</li>
                  ))}
                </ul>
                <p className="service-note">{siteConfig.serviceAreas.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="seo-content primary-section">
        <div className="content-wrapper text-center">
          <h2>Why Choose The Dumpster Man?</h2>
          <div className="seo-grid two-columns">
            {siteConfig.whyChooseUs.map((item, index) => (
              <div className="seo-item" key={index}>
                <h3>{item.title}</h3>
                <div className="section-content">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
