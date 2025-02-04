import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dumpsterSize: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });
      
      if (response.ok) {
        alert('Thank you for your submission!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          dumpsterSize: '',
          message: ''
        });
      } else {
        alert('There was an error. Please try again.');
      }
    } catch (error) {
      alert('There was an error. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="contact-form"
      onSubmit={handleSubmit}
    >
      {/* These hidden inputs are crucial for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input 
          type="text" 
          id="address" 
          name="address" 
          value={formData.address}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="dumpsterSize">Preferred Dumpster Size:</label>
        <select 
          id="dumpsterSize" 
          name="dumpsterSize" 
          value={formData.dumpsterSize}
          onChange={handleChange}
          required
        >
          <option value="">Select a size</option>
          <option value="10yard">10 Yard</option>
          <option value="15yard">15 Yard</option>
          <option value="20yard">20 Yard</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Additional Information:</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm; 