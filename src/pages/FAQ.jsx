import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../App.css';
import { Link } from 'react-router-dom';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What sizes of dumpsters do you offer?",
      answer: "We offer 12, 16, 20, and 25-yard dumpsters to accommodate various project sizes."
    },
    {
      question: "How long can I keep the dumpster?",
      answer: "Our standard rental period is 10 days, but we can be flexible based on your needs."
    },
    {
      question: "What areas do you service?",
      answer: "We service the Capital Region including Mechanicville, Clifton Park, Saratoga Springs, Troy, and surrounding areas."
    },
    {
      question: "Do I need a permit?",
      answer: "If the dumpster will be placed on your private property, no permit is needed. For street placement, local permits may be required."
    },
    {
      question: "What is your payment policy?",
      answer: "We will send you an invoice after the dumpster is picked up and weighed to assess the cost."
    },
    {
      question: "What items are not accepted?",
      answer: "We do not accept hazardous materials, tv's, liquid paint, and certain other items. Some aditional items come at an extra charge"
    },
    {
      question: "Can the dumpster be filled over the top?",
      answer: "No, there is a fill line on the dumpster, but we offer a drop swap service to get you a empty dumpster when picking your full one up."
    },
    {
      question: "Should the dumpster be kept covered?",
      answer: "We recommend you keep it covered to avoid water causing any additional weight as it could increase the cost of the rental."
    },
    {
      question: "Will the dumpster damage my property?",
      answer: "No! We will place the dumpster down safely and on blocks of wood to avoid any damage to your property."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dumpster Rental FAQ | The Dumpster Man 518</title>
        <meta name="description" content="Find answers about dumpster rental in Mechanicville. Learn about sizes, pricing, permits, and accepted materials. Expert waste management guidance." />
        <meta name="keywords" content="dumpster rental FAQ, waste management questions, Mechanicville dumpster service, dumpster sizes FAQ" />
        <link rel="canonical" href="https://thedumpsterman518.com/faq" />
        
        {/* Add structured data for FAQ page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": ${JSON.stringify(faqData.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              })))}
            }
          `}
        </script>
      </Helmet>

      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        
        <div className="faq-section">
          {faqData.map((faq, index) => (
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