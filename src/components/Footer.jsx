import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import siteConfig from '../config/siteConfig.js';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{siteConfig.company.name}</h3>
          <p className="company-description">
            Your trusted waste management solution based out of {siteConfig.company.address.city}, {siteConfig.company.address.state}
          </p>
        </div>
        
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <a href={`tel:${siteConfig.company.phone}`}>{siteConfig.company.phone}</a>
            <a href="mailto:thedumpsterman01@gmail.com">thedumpsterman01@gmail.com</a>
            <div className="social-media">
              <a 
                href="https://www.facebook.com/profile.php?id=61558249876337" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon facebook-icon"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a 
                href="https://www.yelp.com/biz/the-dumpster-man-mechanicville?osq=the+dumpster+man&override_cta=Get+pricing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon yelp-icon"
              >
                Yelp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            {siteConfig.navigation.map((item, index) => (
              <Link key={index} to={item.path}>{item.label}</Link>
            ))}
          </nav>
        </div>
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
    </footer>
  );
}

export default Footer; 