import heroTruck from '../assets/images/hero-truck.webp'
import dumpster20 from '../assets/images/20lot.webp'
import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig.js'
import SEOOptimizer from '../components/SEOOptimizer.jsx'
import OptimizedImage from '../components/OptimizedImage.jsx'

function Home() {
  return (
    <>
      <SEOOptimizer
        title="Capital Region Dumpster Rental | Same-Day Delivery Mechanicville NY - The Dumpster Man"
        description="Capital Region dumpster rental with same-day delivery in Mechanicville, Clifton Park, Ballston Spa & Halfmoon NY. Get competitive pricing on 12-25 yard dumpsters. Call (518) 920-2618!"
        keywords="capital region dumpster rental, dumpster rental mechanicville, dumpster rental clifton park ny, dumpster rental ballston spa ny, dumpster rental halfmoon, the dumpster man, same day delivery"
        canonicalUrl="https://thedumpsterman518.com/"
        structuredDataType="aiOptimized"
      />
      
      <div className="hero-section">
        <OptimizedImage 
          src={heroTruck} 
          alt="Dumpster Man truck with trailer in snow" 
          className="hero-image"
          priority={true}
          sizes="100vw"
        />
        {/* Hero Content Overlay */}
        <div className="hero-content">
          <div className="hero-text">
            <h1>Capital Region Dumpster Rental</h1>
            <h2>Same-Day Delivery • Competitive Pricing • Local Service</h2>
            <p className="hero-subtitle">Serving Mechanicville, Clifton Park, Ballston Spa, Halfmoon & Capital Region</p>
            <div className="hero-cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get Free Quote →
              </Link>
              <Link to="/dumpster-sizes" className="cta-button secondary">
                View Dumpster Sizes →
              </Link>
            </div>
            <div className="hero-features">
              <span className="feature">✓ Same-Day Delivery</span>
              <span className="feature">✓ Competitive Pricing</span>
              <span className="feature">✓ Local Service</span>
            </div>
          </div>
        </div>
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
          <h2>Your Trusted Waste Management Partner in Mechanicville NY</h2>
          <div className="section-content">
            <p>Based in Mechanicville, NY, The Dumpster Man has been serving the Capital Region for years, building a reputation for reliability, professionalism, and exceptional customer service. Our commitment to the local community drives everything we do, from providing same-day delivery to offering competitive pricing that fits your budget.</p>
            <p>We understand that every project is unique, which is why we offer flexible dumpster sizes and personalized service to meet your specific needs. Our experienced team is knowledgeable about local regulations and can help you navigate permit requirements, ensuring your project runs smoothly from start to finish. Whether you're tackling a home renovation, construction project, or residential cleanout, our team ensures efficient service and exceptional customer care.</p>
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
          <h2>Comprehensive Dumpster Rental Services in Mechanicville NY</h2>
          <div className="section-content">
            <p>Our comprehensive dumpster rental services are designed to handle projects of all sizes. From small residential cleanouts to large commercial construction projects, we have the right dumpster size for your needs. Our 12-yard dumpsters are perfect for garage cleanouts and small remodeling projects, while our 25-yard dumpsters can handle major construction and demolition projects.</p>
            <p>Each dumpster comes with our commitment to safe, professional delivery and pickup, ensuring your project stays on schedule. We also offer flexible rental periods and can accommodate urgent requests with our same-day delivery service. Our team provides guidance on proper loading to maximize capacity and ensure safe transport, helping you get the most value from your rental.</p>
          </div>
          <div className="cta-container">
            <Link to="/dumpster-sizes" className="cta-button">
              View All Sizes →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <h2>Serving the Capital Region with Local Expertise</h2>
          <div className="section-content">
            <p>We proudly serve Mechanicville NY and the surrounding Capital Region, including Albany, Clifton Park, Saratoga Springs, Troy, Ballston Spa, Stillwater, Waterford, Round Lake, Malta, Halfmoon, Schaghticoke, Valley Falls, Hoosick Falls, Greenwich, Cambridge, Cohoes, Watervliet, and Latham. Our local knowledge and community connections enable us to provide personalized service and quick response times throughout the region.</p>
            <p>Being a local company means we understand the unique challenges of projects in the Capital Region, from seasonal weather considerations to local permit requirements. Our team is familiar with the area's regulations and can help you navigate any necessary permits or restrictions for your specific location. We're committed to maintaining the beauty and cleanliness of our community through responsible waste management practices.</p>
          </div>
        </div>
      </section>





      {/* Testimonials Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>What Our Capital Region Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"The Dumpster Man delivered our dumpster same-day when we needed it for a last-minute renovation. Great service and competitive pricing!"</p>
                <div className="testimonial-author">
                  <strong>Sarah M.</strong>
                  <span>Mechanicville, NY</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"Professional service from start to finish. They helped us choose the right dumpster size and the delivery was on time. Highly recommend!"</p>
                <div className="testimonial-author">
                  <strong>Mike R.</strong>
                  <span>Clifton Park, NY</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"Best dumpster rental service in the Capital Region. Fair pricing, reliable delivery, and excellent customer service."</p>
                <div className="testimonial-author">
                  <strong>Jennifer L.</strong>
                  <span>Ballston Spa, NY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Get Your Free Quote Today →
            </Link>
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

      {/* Benefits Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Comprehensive Benefits for Mechanicville NY Customers</h2>
          <div className="section-content">
            <p>When you choose The Dumpster Man for your dumpster rental needs, you're choosing a local company that understands the unique challenges of projects in the Capital Region. Our same-day delivery service means you can start your project immediately, without waiting for equipment to arrive. Our competitive pricing ensures you get the best value for your money, with no hidden fees or surprise charges.</p>
            <p>We're committed to environmental responsibility and work with local waste processing facilities to ensure proper disposal of all materials. Our customer service team is available to answer questions and provide guidance throughout your rental period. We also offer flexible scheduling to accommodate your project timeline, with options for same-day, next-day, or scheduled delivery based on your needs.</p>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility Section */}
      <section className="full-width-section primary-section">
        <div className="content-wrapper text-center">
          <h2>Environmental Responsibility in the Capital Region</h2>
          <div className="section-content">
            <p>At The Dumpster Man, we're committed to environmental responsibility and sustainable waste management practices throughout the Capital Region. We work closely with local waste processing facilities to ensure that materials are properly sorted, recycled, and disposed of according to environmental regulations. Our team is trained to identify recyclable materials and separate them from general waste whenever possible.</p>
            <p>We understand the importance of protecting the natural beauty of the Capital Region, from the Hudson River to the Adirondack Mountains. That's why we implement eco-friendly practices in all aspects of our service, from fuel-efficient delivery vehicles to responsible waste disposal methods. We also provide guidance to customers on how to maximize recycling opportunities and minimize environmental impact during their projects.</p>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="full-width-section secondary-section">
        <div className="content-wrapper text-center">
          <h2>Exceptional Customer Service in Mechanicville NY</h2>
          <div className="section-content">
            <p>Our customer service philosophy is built on the foundation of local expertise and personalized attention. We understand that every project has unique requirements, and our team takes the time to understand your specific needs before recommending the best dumpster solution. From initial consultation to final pickup, we provide clear communication and reliable service that you can count on.</p>
            <p>Our experienced team is knowledgeable about local regulations, permit requirements, and project planning considerations specific to the Capital Region. We provide detailed guidance on dumpster placement, loading techniques, and project timelines to help ensure your project runs smoothly. Whether you're a first-time customer or a returning client, you'll receive the same level of professional, courteous service that has made us a trusted name in Mechanicville NY waste management.</p>
          </div>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Get Your Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
