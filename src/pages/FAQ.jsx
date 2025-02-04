import React, { useState } from 'react';
import '../App.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What sizes of dumpsters do you offer?",
      answer: "We offer 10, 15, and 20-yard dumpsters to accommodate various project sizes."
    },
    {
      question: "How long can I keep the dumpster?",
      answer: "Our standard rental period is 7 days, but we can be flexible based on your needs."
    },
    {
      question: "What areas do you service?",
      answer: "We service the Capital Region including Mechanicville, Clifton Park, Saratoga Springs, Troy, and surrounding areas."
    },
    {
      question: "What can I put in the dumpster?",
      answer: "Our dumpsters can handle most household and construction debris. However, hazardous materials, electronics, and certain other items are prohibited."
    },
    {
      question: "Do I need a permit?",
      answer: "If the dumpster will be placed on your private property, no permit is needed. For street placement, local permits may be required."
    },
    {
      question: "What is your payment policy?",
      answer: "We will send you an invoice after the dumpster is picked up."
    },
    {
      question: "What items are not accepted?",
      answer: "We do not accept hazardous materials, electronics, and certain other items. Some items come at a extra charge"
    }
  ];

  return (
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
    </div>
  );
}

export default FAQ; 