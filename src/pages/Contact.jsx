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
        <link rel="canonical" href="https://thedumpsterman518.com/contact/" />
        
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
                <p className="success-subtitle">We'll get back to you soon!</p>
              </div>
            </div>
          )}

          <form 
            onSubmit={handleSubmit} 
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
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
      </div>
    </>
  );
}

export default Contact;
