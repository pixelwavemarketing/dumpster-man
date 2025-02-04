import { useState } from 'react'
import lot16 from '../assets/images/16lot.webp'
import yard16 from '../assets/images/16.webp'
import yard20 from '../assets/images/20.webp'
import yard25 from '../assets/images/25.webp'

function Services() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="services-page">
      <div className="services-spacer"></div>
      <div className="page-container">
        <div className="services-header">
          <h1>Our Dumpster Sizes</h1>
          <p>Find the right dumpster size for your project</p>
        </div>
        <div className="services-grid">
          {[
            {
              img: lot16,
              title: "12 Yard Dumpster",
              desc: "Perfect for residential cleanouts, small remodeling projects, and yard waste. Easy driveway access. Roughly 4 truck beds."
            },
            {
              img: yard16,
              title: "16 Yard Dumpster",
              desc: "Ideal for medium-sized projects, home renovations, and construction debris removal. Roughly 6 truck beds."
            },
            {
              img: yard20,
              title: "20 Yard Dumpster",
              desc: "Great for larger renovation projects, commercial cleanouts, and heavy construction waste. Roughly 7 truck beds."
            },
            {
              img: yard25,
              title: "25 Yard Dumpster",
              desc: "Our largest option, perfect for major construction projects, large-scale cleanouts, and commercial use. Roughly 8 truck beds."
            }
          ].map((item, index) => (
            <div className="service-item" key={index}>
              <div 
                className={`image-container ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <p>{item.desc}</p>
                </div>
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="additional-costs">
          <h2>Additional Fees & Restrictions</h2>
          <div className="costs-grid">
            <div className="costs-section">
              <h3>Additional Charges</h3>
              <ul>
                <li>Mattresses: $50 per item</li>
                <li>Tires: $15 per item</li>
                <li>Extended Service Area: Additional fee applies for locations beyond 30-minute radius of Mechanicville, NY</li>
              </ul>
            </div>
            <div className="costs-section">
              <h3>Prohibited Items</h3>
              <ul>
                <li>TVs are not accepted</li>
                <li>Wet paint cans are not accepted</li>
                <li>Paint cans must be completely dry</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-area">
          <div className="service-area-content">
            <h2>Service Area</h2>
            <div className="area-info">
              <i className="location-icon">📍</i>
              <p>We proudly serve all areas within a <span className="highlight">30-minute radius</span> of Mechanicville, NY</p>
            </div>
            <div className="area-note">
              <p>Including surrounding communities in Saratoga County and neighboring areas</p>
              <p className="extended-area">Need service beyond our standard radius? We can accommodate locations outside our primary service area for an additional fee. Contact us for details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
