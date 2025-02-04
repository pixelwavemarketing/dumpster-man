import { useState } from 'react';

function ContactForm() {
  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      netlify
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="form-group">
        <label>Name:
          <input type="text" name="name" required />
        </label>
      </div>
      
      <div className="form-group">
        <label>Email:
          <input type="email" name="email" required />
        </label>
      </div>
      
      <div className="form-group">
        <label>Phone:
          <input type="tel" name="phone" required />
        </label>
      </div>
      
      <div className="form-group">
        <label>Address:
          <input type="text" name="address" required />
        </label>
      </div>
      
      <div className="form-group">
        <label>Preferred Dumpster Size:
          <select name="dumpsterSize" required>
            <option value="">Select a size</option>
            <option value="10yard">10 Yard</option>
            <option value="15yard">15 Yard</option>
            <option value="20yard">20 Yard</option>
          </select>
        </label>
      </div>
      
      <div className="form-group">
        <label>Message:
          <textarea name="message"></textarea>
        </label>
      </div>
      
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm; 