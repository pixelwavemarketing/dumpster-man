function ContactForm() {
  return (
    <form 
      className="contact-form" 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* Add this hidden input */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Add this for spam protection */}
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      {/* Your existing form fields - make sure they all have 'name' attributes */}
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

      {/* ... rest of your form fields ... */}
    </form>
  )
}

export default ContactForm 