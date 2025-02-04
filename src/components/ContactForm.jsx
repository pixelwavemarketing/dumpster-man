import { useState } from 'react';

function ContactForm() {
  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="contact-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="dumpsterSize">Preferred Dumpster Size:</label>
        <select id="dumpsterSize" name="dumpsterSize" required>
          <option value="">Select a size</option>
          <option value="10yard">10 Yard</option>
          <option value="15yard">15 Yard</option>
          <option value="20yard">20 Yard</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Additional Information:</label>
        <textarea id="message" name="message" rows="4"></textarea>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm; 