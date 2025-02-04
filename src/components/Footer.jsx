import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>The Dumpster Man</h3>
          <p className="company-description">
            Your trusted waste management solution based out of Mechanicville, NY
          </p>
        </div>
        
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><a href="tel:+15189202618">(518) 920-2618</a></p>
            <p><a href="mailto:thedumpsterman01@gmail.com">thedumpsterman01@gmail.com</a></p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/dumpster-sizes">Dumpster Sizes</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <a 
            href="https://usepixelwave.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="creator-link"
          >
            Website built by Pixelwave Marketing
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 