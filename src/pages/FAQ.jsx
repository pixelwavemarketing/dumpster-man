import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig.js';
import StructuredData from '../components/StructuredData.jsx';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.seoContent.faq.title}</title>
        <meta name="description" content={siteConfig.seoContent.faq.description} />
        <meta name="keywords" content={siteConfig.seoContent.faq.keywords} />
        <link rel="canonical" href="https://thedumpsterman518.com/faq" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
                        {/* Add structured data for FAQ page */}
                <script type="application/ld+json">
                  {StructuredData({ type: "faq" })}
                </script>
      </Helmet>

      <div className="faq-container">
        
        {/* Overview Section */}
        <section className="full-width-section primary-section">
          <div className="content-wrapper text-center">
            <h2>{siteConfig.contentSections.faq.overview.title}</h2>
            <div className="section-content">
              <p>{siteConfig.contentSections.faq.overview.content}</p>
            </div>
          </div>
        </section>
        
        <div className="faq-section">
          {siteConfig.faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Information Section */}
        <section className="full-width-section secondary-section">
          <div className="content-wrapper text-center">
            <h2>{siteConfig.contentSections.faq.detailed.title}</h2>
            <div className="section-content">
              <p>{siteConfig.contentSections.faq.detailed.content}</p>
            </div>
          </div>
        </section>

        <section className="full-width-section primary-section">
          <div className="content-wrapper text-center">
            <h2>Ready to Get Started?</h2>
            <div className="section-content">
              <p>View our dumpster sizes or contact us for a quote today</p>
            </div>
            <div className="cta-container dual-buttons">
              <Link to="/dumpster-sizes" className="cta-button">
                View Dumpster Sizes →
              </Link>
              <Link to="/contact" className="cta-button">
                Get Your Quote →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQ; 