import { Helmet } from 'react-helmet-async';
import heroTruck from '../assets/images/hero-truck.webp'
import dumpster20 from '../assets/images/20lot.webp'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Helmet>
        <title>Dumpster Rental Mechanicville NY | Same Day Service | The Dumpster Man</title>
        <meta name="description" content="Local dumpster rental in Mechanicville & Capital Region. Same-day delivery available. 12-25 yard containers for residential & commercial use. Call (518) 920-2618." />
        <meta name="keywords" content="dumpster rental, waste management, Mechanicville NY, Capital Region, same day dumpster rental, construction waste, residential dumpster" />
        <link rel="canonical" href="https://thedumpsterman518.com" />
        
        {/* Add structured data for local business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WasteManagementService",
              "name": "The Dumpster Man 518",
              "image": "https://thedumpsterman518.com/images/hero-truck.webp",
              "description": "Local dumpster rental service in Mechanicville and Capital Region. Same-day delivery available.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "251 Round Lake Road",
                "addressLocality": "Mechanicville",
                "addressRegion": "NY",
                "postalCode": "12118"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.9153",
                "longitude": "-73.6868"
              },
              "url": "https://thedumpsterman518.com",
              "telephone": "(518) 920-2618",
              "areaServed": ["Mechanicville", "Capital Region", "Clifton Park", "Saratoga Springs", "Troy"],
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>
      
      <div className="hero-section">
        <img 
          src={heroTruck} 
          alt="Dumpster Man truck with trailer in snow" 
          className="hero-image"
        />
      </div>

      {/* About & Contact Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <h2>Local Waste Management Experts</h2>
          <div className="section-content">
            <p>
              Based in Mechanicville, NY, The Dumpster Man provides reliable and efficient 
              dumpster rental services for residential and commercial projects.
            </p>
            <p>
              We have a commitment to customer satisfaction, 
              and we ensure your waste management needs are handled professionally.
            </p>
          </div>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Contact Us Today →
            </Link>
          </div>
        </div>
      </section>

      {/* Dumpster Selection Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper with-image">
          <div className="text-content text-center">
            <h2>Find Your Perfect Dumpster Size</h2>
            <div className="section-content">
              <p>
                Whether you're tackling a small home cleanup or managing a large 
                construction project, we have the right dumpster size for your needs.
              </p>
              <p>
                Our range includes 12, 16, 20, and 25-yard options to ensure you get 
                the perfect fit for your project.
              </p>
            </div>
            <div className="cta-container">
              <Link to="/dumpster-sizes" className="cta-button">
                View All Sizes →
              </Link>
            </div>
          </div>
          <div className="image-wrapper">
            <img 
              src={dumpster20} 
              alt="20 yard dumpster" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Update the SEO section */}
      <section className="full-width-section seo-content primary-section">
        <div className="content-wrapper text-center">
          <h2>Reliable Dumpster Rental Services in Capital Region</h2>
          <div className="seo-grid">
            <div className="seo-item">
              <h3>Same Day Dumpster Rental</h3>
              <div className="section-content">
                <p>Need a dumpster today? We offer same-day delivery service throughout Mechanicville and the Capital Region. Our efficient team ensures quick response times for urgent waste management needs.</p>
              </div>
            </div>
            <div className="seo-item">
              <h3>Multiple Dumpster Sizes</h3>
              <div className="section-content">
                <p>Choose from our range of 12, 16, 20, and 25-yard dumpsters. Perfect for residential cleanouts, construction projects, and commercial use. Not sure what size you need? Our experts will help you choose.</p>
              </div>
            </div>
            <div className="seo-item">
              <h3>Local Service Area</h3>
              <div className="section-content">
                <p>Proudly serving Mechanicville, Clifton Park, Saratoga Springs, Troy, and surrounding areas. Local, reliable, and professional dumpster rental service for all your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
