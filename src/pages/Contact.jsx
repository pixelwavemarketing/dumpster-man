import { useState } from 'react'

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
    
    // This will work with Netlify forms automatically
    // Just make sure to add the "data-netlify='true'" attribute to the form
    
    // Show success message
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
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="form-group">
            <label htmlFor="name">Name *</label>
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
            <label htmlFor="phone">Phone Number *</label>
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

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div className="quick-contact-section">
          <div className="quick-contact-content">
            <span className="phone-icon">📞</span>
            <h3>Need a Faster Response?</h3>
            <p>For faster assistance, please give us a call!</p>
            <a href="tel:+15189202618" className="phone-button">
              (518) 920-2618
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
