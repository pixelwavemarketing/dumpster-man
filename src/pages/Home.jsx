import { Helmet } from 'react-helmet-async';
import heroTruck from '../assets/images/hero-truck.webp'
import dumpster20 from '../assets/images/20lot.webp'
import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig.js'
import StructuredData from '../components/StructuredData.jsx'
import OptimizedImage from '../components/OptimizedImage.jsx'

function Home() {
  return (
    <>
      <Helmet>
        <title>{siteConfig.seoContent.home.title}</title>
        <meta name="description" content={siteConfig.seoContent.home.description} />
        <meta name="keywords" content={siteConfig.seoContent.home.keywords} />
        <link rel="canonical" href="https://thedumpsterman518.com/" />
        
        {/* Add structured data for local business */}
        <script type="application/ld+json">
          {StructuredData({ type: "aiOptimized" })}
        </script>
        <script type="application/ld+json">
          {StructuredData({ type: "localBusiness" })}
        </script>
      </Helmet>
      
      <div className="hero-section">
        <OptimizedImage 
          src={heroTruck} 
          alt="Dumpster Man truck with trailer in snow" 
          className="hero-image"
          priority={true}
          sizes="100vw"
        />
      </div>
      
      {/* Mobile-only hero image */}
      <div className="mobile-hero-image">
        <OptimizedImage 
          src={heroTruck} 
          alt="Dumpster Man truck with trailer in snow" 
          className="mobile-hero-img"
          priority={true}
          sizes="100vw"
        />
      </div>

      {/* About Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <h2>Your Trusted Waste Management Partner in Albany NY</h2>
          <div className="section-content">
            <p>Based in Mechanicville, NY, The Dumpster Man has been serving the Capital Region for years, building a reputation for reliability, professionalism, and exceptional customer service. Our commitment to the local community drives everything we do, from providing same-day delivery to offering competitive pricing that fits your budget.</p>
          </div>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Contact Us Today →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Comprehensive Dumpster Rental Services in Albany NY</h2>
          <div className="section-content">
            <p>Our comprehensive dumpster rental services are designed to handle projects of all sizes. From small residential cleanouts to large commercial construction projects, we have the right dumpster size for your needs. Each dumpster comes with our commitment to safe, professional delivery and pickup.</p>
          </div>
          <div className="cta-container">
            <Link to="/dumpster-sizes" className="cta-button">
              View All Sizes →
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <div className="image-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <OptimizedImage 
              src={dumpster20} 
              alt="20 yard dumpster" 
              className="section-image"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="full-width-section seo-content primary-section">
        <div className="content-wrapper text-center">
          <h2>Why Choose The Dumpster Man?</h2>
          <div className="seo-grid">
            {siteConfig.features.map((feature, index) => (
              <div className="seo-item" key={index}>
                <h3>{feature.title}</h3>
                <div className="section-content">
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
