import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import siteConfig from '../config/siteConfig.js';
import StructuredData from '../components/StructuredData.jsx';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    dumpsterSize: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      dumpsterSize: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.seoContent.contact.title}</title>
        <meta name="description" content={siteConfig.seoContent.contact.description} />
        <meta name="keywords" content={siteConfig.seoContent.contact.keywords} />
        <link rel="canonical" href="https://thedumpsterman518.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Add structured data for contact page */}
        <script type="application/ld+json">
          {StructuredData({ type: "organization" })}
        </script>
      </Helmet>

      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <div className="header-underline"></div>
          <p className="contact-subtitle">
            Get in touch with us today for a free quote and exceptional service
          </p>
        </div>

        <div className="contact-form-container">
          {showSuccess && (
            <div className="success-message">
              <div className="success-content">
                <span className="success-icon">✓</span>
                <p>Thank you! Your message has been sent successfully.</p>
                <p className="success-subtitle">We&apos;ll get back to you soon!</p>
              </div>
            </div>
          )}

          <form 
            onSubmit={handleSubmit} 
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dumpsterSize">Dumpster Size</label>
              <select
                id="dumpsterSize"
                name="dumpsterSize"
                value={formData.dumpsterSize}
                onChange={handleChange}
              >
                <option value="">Select a size</option>
                {siteConfig.dumpsters.map((dumpster) => (
                  <option key={dumpster.id} value={dumpster.name}>
                    {dumpster.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        <section className="quick-contact-section">
          <div className="quick-contact-content">
            <div className="phone-icon">📞</div>
            <h3>Need immediate assistance?</h3>
            <p>Call us directly at {siteConfig.company.phone}</p>
            <a href={`tel:${siteConfig.company.phone}`} className="phone-button">
              Call Now
            </a>
          </div>
        </section>

        {/* Contact Process Section */}
        <section className="full-width-section primary-section">
          <div className="content-wrapper text-center">
            <h2>Simple and Efficient Dumpster Rental Process</h2>
            <div className="section-content">
              <p>Our dumpster rental process is designed to be simple and efficient, getting you the equipment you need when you need it. The process begins with a consultation where we discuss your project requirements, timeline, and budget. Our team helps you select the appropriate dumpster size and provides detailed pricing information. Once you approve the quote, we schedule delivery at your convenience, with same-day delivery available for urgent projects.</p>
              <p>Our professional team handles all aspects of delivery and pickup, ensuring safe placement and removal of the dumpster. Throughout your rental period, our customer service team is available to answer questions and provide support. We also handle all waste disposal and recycling, ensuring environmentally responsible disposal of your project materials. From initial contact to final pickup, we make the entire process seamless and stress-free.</p>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="full-width-section secondary-section">
          <div className="content-wrapper text-center">
            <h2>Comprehensive Service Coverage in the Capital Region</h2>
            <div className="section-content">
              <p>We provide reliable dumpster rental services throughout Mechanicville NY and the surrounding Capital Region, including Albany, Clifton Park, Saratoga Springs, Troy, Ballston Spa, Stillwater, Waterford, Round Lake, Malta, Halfmoon, Schaghticoke, Valley Falls, Hoosick Falls, Greenwich, Cambridge, Cohoes, Watervliet, and Latham. Our local knowledge and community connections enable us to provide personalized service and quick response times throughout the region.</p>
              <p>Being a local company means we understand the unique challenges of projects in the Capital Region, from seasonal weather considerations to local permit requirements. Our team is familiar with the area's regulations and can help you navigate any necessary permits or restrictions for your specific location. We're committed to maintaining the beauty and cleanliness of our community through responsible waste management practices.</p>
            </div>
          </div>
        </section>

        {/* Customer Support Section */}
        <section className="full-width-section primary-section">
          <div className="content-wrapper text-center">
            <h2>Exceptional Customer Support and Guidance</h2>
            <div className="section-content">
              <p>Our customer support team is dedicated to providing exceptional service and guidance throughout your dumpster rental experience. We understand that every project has unique requirements, and our team takes the time to understand your specific needs before recommending the best dumpster solution. From initial consultation to final pickup, we provide clear communication and reliable service that you can count on.</p>
              <p>Our experienced team is knowledgeable about local regulations, permit requirements, and project planning considerations specific to the Capital Region. We provide detailed guidance on dumpster placement, loading techniques, and project timelines to help ensure your project runs smoothly. Whether you're a first-time customer or a returning client, you'll receive the same level of professional, courteous service that has made us a trusted name in Mechanicville NY waste management.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
