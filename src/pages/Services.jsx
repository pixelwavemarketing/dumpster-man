import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import lot16 from '../assets/images/16lot.webp'
import yard16 from '../assets/images/16.webp'
import yard20 from '../assets/images/20.webp'
import yard25 from '../assets/images/25.webp'
import { Link } from 'react-router-dom'

function Services() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>Dumpster Sizes & Pricing | The Dumpster Man 518</title>
        <meta name="description" content="Local dumpster rental in Mechanicville, Clifton Park, and Saratoga Springs. 12-25 yard containers with same-day delivery. Best prices in Capital Region." />
        <meta name="keywords" content="dumpster sizes, dumpster pricing, Mechanicville dumpster rental, construction dumpster, yard waste removal" />
        <link rel="canonical" href="https://thedumpsterman518.com/dumpster-sizes" />
        
        {/* Add structured data for products */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Product",
                  "name": "12 Yard Dumpster",
                  "description": "Perfect for residential cleanouts and small projects",
                  "image": "${lot16}",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "areaServed": {
                      "@type": "GeoCircle",
                      "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": "42.9153",
                        "longitude": "-73.6868"
                      },
                      "geoRadius": "30"
                    }
                  }
                },
                {
                  "@type": "Product",
                  "name": "16 Yard Dumpster",
                  "description": "Ideal for medium-sized projects, home renovations, and construction debris removal. Roughly 6 truck beds.",
                  "image": "${yard16}",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "areaServed": {
                      "@type": "GeoCircle",
                      "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": "42.9153",
                        "longitude": "-73.6868"
                      },
                      "geoRadius": "30"
                    }
                  }
                },
                {
                  "@type": "Product",
                  "name": "20 Yard Dumpster",
                  "description": "Great for larger renovation projects, commercial cleanouts, and heavy construction waste. Roughly 7 truck beds.",
                  "image": "${yard20}",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "areaServed": {
                      "@type": "GeoCircle",
                      "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": "42.9153",
                        "longitude": "-73.6868"
                      },
                      "geoRadius": "30"
                    }
                  }
                },
                {
                  "@type": "Product",
                  "name": "25 Yard Dumpster",
                  "description": "Our largest option, perfect for major construction projects, large-scale cleanouts, and commercial use. Roughly 8 truck beds.",
                  "image": "${yard25}",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "areaServed": {
                      "@type": "GeoCircle",
                      "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": "42.9153",
                        "longitude": "-73.6868"
                      },
                      "geoRadius": "30"
                    }
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

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
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="overlay">
                    <p className="service-description">{item.desc}</p>
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

          <div className="cta-section">
            <div className="content-wrapper text-center">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today for a free quote and exceptional service</p>
              <Link to="/contact" className="cta-button">
                Get Your Dumpster Today →
              </Link>
            </div>
          </div>

          <div className="service-area">
            <div className="service-area-content">
              <h2>Capital Region Service Area</h2>
              <div className="area-info">
                <i className="location-icon">📍</i>
                <p>Based in <strong>Mechanicville, NY</strong>, serving:</p>
              </div>
              <div className="service-locations">
                <ul>
                  <li>Mechanicville</li>
                  <li>Clifton Park</li>
                  <li>Saratoga Springs</li>
                  <li>Troy</li>
                  <li>Waterford</li>
                  <li>Stillwater</li>
                  <li>Round Lake</li>
                  <li>Malta</li>
                </ul>
                <p className="service-note">And all surrounding Capital Region communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="seo-content primary-section">
        <div className="content-wrapper text-center">
          <h2>Why Choose The Dumpster Man?</h2>
          <div className="seo-grid two-columns">
            <div className="seo-item">
              <h3>Fast Delivery</h3>
              <div className="section-content">
                <p>Same-day and next-day delivery available throughout the Capital Region. Our efficient team ensures quick response times for all your waste management needs. Call (518) 920-2618 for immediate service.</p>
              </div>
            </div>
            <div className="seo-item">
              <h3>Best Price Guarantee</h3>
              <div className="section-content">
                <p>We offer competitive pricing with no hidden fees. Our transparent pricing ensures you get the best value for dumpster rental in the Capital Region. Contact us today for a free quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
