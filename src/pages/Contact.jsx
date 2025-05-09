import { useState } from 'react'
import { Helmet } from 'react-helmet-async';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    dumpsterSize: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create FormData object
    const form = e.target
    const formData = new FormData(form)

    // Submit to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setShowSuccess(true)
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          streetAddress: '',
          city: '',
          dumpsterSize: '',
        })
      })
      .catch((error) => console.log(error))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    // Hide success message when user starts typing in a new form
    if (showSuccess) {
      setShowSuccess(false)
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Helmet>
        <title>Contact for Dumpster Rental | The Dumpster Man 518</title>
        <meta name="description" content="Get a quote for dumpster rental in Mechanicville and Capital Region. Fast response times, competitive rates. Call (518) 920-2618 today." />
        <meta name="keywords" content="dumpster rental quote, contact dumpster service, Mechanicville waste management, same day dumpster" />
        <link rel="canonical" href="https://thedumpsterman518.com/contact" />
        
        {/* Add structured data for contact page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "description": "Contact us for dumpster rental services in Mechanicville and surrounding areas",
              "mainEntity": {
                "@type": "Organization",
                "name": "The Dumpster Man 518",
                "telephone": "(518) 920-2618",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "251 Round Lake Road",
                  "addressLocality": "Mechanicville",
                  "addressRegion": "NY",
                  "postalCode": "12118"
                }
              }
            }
          `}
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
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group address-container">
              <label>Address</label>
              <div className="address-inputs">
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="Street Address"
                  className="street-input"
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="city-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Dumpster Size *</label>
              <div className="radio-group">
                {['12', '16', '20', '25', 'Not Sure'].map((size) => (
                  <label key={size} className="radio-label">
                    <input
                      type="radio"
                      name="dumpsterSize"
                      value={size}
                      checked={formData.dumpsterSize === size}
                      onChange={handleChange}
                      required
                    />
                    <span>{size} {size !== 'Not Sure' ? 'Yard' : ''}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>

          <div className="quick-contact-section">
            <div className="quick-contact-content">
              <span className="phone-icon">📞</span>
              <h3>Need a Faster Response?</h3>
              <p>For faster assistance, please give us a call!</p>
              <a href="tel:+15189202618" className="cta-button">
                (518) 920-2618
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
