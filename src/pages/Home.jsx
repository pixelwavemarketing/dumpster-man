import { Helmet } from 'react-helmet-async';
import heroTruck from '../assets/images/hero-truck.webp'
import dumpster20 from '../assets/images/20lot.webp'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Helmet>
        <title>The Dumpster Man | Mechanicville Waste Management</title>
        <meta name="description" content="Professional dumpster rental service in Mechanicville, NY. Choose from 12-25 yard containers for residential and commercial projects." />
        <meta name="keywords" content="dumpster rental, waste management, Mechanicville NY, construction waste, residential dumpster" />
        <link rel="canonical" href="https://thedumpsterman518.com" />
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
            <Link to="/contact" className="cta-button primary">
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
              <Link to="/dumpster-sizes" className="cta-button secondary">
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
    </>
  )
}

export default Home
