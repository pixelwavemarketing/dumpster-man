import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import siteConfig from '../config/siteConfig.js';

const StickyCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show button after a short delay to avoid immediate popup
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Always show the button after scrolling down a bit
      if (scrollTop > 300) {
        setIsVisible(true);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(showTimer);
    };
  }, []);

  // Show on all pages

  return (
    <div 
      className={`sticky-call-button ${isVisible ? 'visible' : 'hidden'}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        transition: 'all 0.3s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <a
        href={`tel:${siteConfig.company.phone}`}
        className="sticky-call-link"
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
          transition: 'all 0.3s ease',
          border: 'none',
          cursor: 'pointer',
          minWidth: '140px',
          justifyContent: 'center',
          gap: '8px'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#1d4ed8';
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#2563eb';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          style={{ flexShrink: 0 }}
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        Call Now
      </a>
    </div>
  );
};

export default StickyCallButton;
