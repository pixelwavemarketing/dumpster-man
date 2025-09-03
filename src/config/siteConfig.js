// Site Configuration - Centralized data for easy updates
export const siteConfig = {
  // Company Information
  company: {
    name: "The Dumpster Man",
    phone: "(518) 920-2618",
    address: {
      street: "251 Round Lake Road",
      city: "Mechanicville",
      state: "NY",
      zip: "12118"
    },
    coordinates: {
      latitude: "42.9153",
      longitude: "-73.6868"
    },
    hours: "Monday-Sunday: 7:00 AM - 7:00 PM",
    serviceArea: "Capital Region",
    email: "thedumpsterman01@gmail.com",
    website: "https://thedumpsterman518.com"
  },

  // Dumpster Sizes and Pricing - Enhanced for AI understanding
  dumpsters: [
    {
      id: "12-yard",
      name: "12 Yard Dumpster",
      description: "Perfect for residential cleanouts, small remodeling projects, and yard waste. Easy driveway access. Roughly 4 truck beds.",
      image: "/src/assets/images/16lot.webp",
      features: [
        "Perfect for small projects",
        "Easy driveway access",
        "Roughly 4 truck beds",
        "Ideal for yard waste"
      ],
      pricing: {
        basePrice: "Contact for quote",
        additionalInfo: "Pricing varies by location and project type"
      },
      capacity: "12 cubic yards",
      dimensions: "8' x 6' x 4'",
      weightLimit: "2-3 tons",
      commonUses: ["Residential cleanouts", "Small remodeling", "Yard waste", "Garage cleanouts"]
    },
    {
      id: "16-yard",
      name: "16 Yard Dumpster",
      description: "Ideal for medium-sized projects, home renovations, and construction debris removal. Roughly 6 truck beds.",
      image: "/src/assets/images/16.webp",
      features: [
        "Medium-sized projects",
        "Home renovations",
        "Roughly 6 truck beds",
        "Construction debris"
      ],
      pricing: {
        basePrice: "Contact for quote",
        additionalInfo: "Pricing varies by location and project type"
      },
      capacity: "16 cubic yards",
      dimensions: "12' x 8' x 4'",
      weightLimit: "3-4 tons",
      commonUses: ["Home renovations", "Kitchen remodels", "Bathroom projects", "Deck removal"]
    },
    {
      id: "20-yard",
      name: "20 Yard Dumpster",
      description: "Great for larger renovation projects, commercial cleanouts, and heavy construction waste. Roughly 7 truck beds.",
      image: "/src/assets/images/20.webp",
      features: [
        "Larger renovation projects",
        "Commercial cleanouts",
        "Roughly 7 truck beds",
        "Heavy construction waste"
      ],
      pricing: {
        basePrice: "Contact for quote",
        additionalInfo: "Pricing varies by location and project type"
      },
      capacity: "20 cubic yards",
      dimensions: "14' x 8' x 4'",
      weightLimit: "4-5 tons",
      commonUses: ["Large renovations", "Commercial projects", "Roofing projects", "Demolition"]
    },
    {
      id: "25-yard",
      name: "25 Yard Dumpster",
      description: "Our largest option, perfect for major construction projects, large-scale cleanouts, and commercial use. Roughly 8 truck beds.",
      image: "/src/assets/images/25.webp",
      features: [
        "Major construction projects",
        "Large-scale cleanouts",
        "Roughly 8 truck beds",
        "Commercial use"
      ],
      pricing: {
        basePrice: "Contact for quote",
        additionalInfo: "Pricing varies by location and project type"
      },
      capacity: "25 cubic yards",
      dimensions: "16' x 8' x 4'",
      weightLimit: "5-6 tons",
      commonUses: ["Major construction", "Commercial cleanouts", "Large demolition", "Multi-family projects"]
    }
  ],

  // Additional Fees and Restrictions
  additionalFees: {
    charges: [
      { item: "Mattresses", price: "$50 per item" },
      { item: "Tires", price: "$15 per item" },
      { item: "Extended Service Area", price: "Additional fee applies for locations beyond 30-minute radius of Mechanicville, NY" }
    ],
    prohibitedItems: [
      "TVs are not accepted",
      "Wet paint cans are not accepted",
      "Paint cans must be completely dry"
    ]
  },

  // Service Areas
  serviceAreas: {
    primary: "Mechanicville",
    regions: [
      "Mechanicville",
      "Clifton Park", 
      "Saratoga Springs",
      "Troy",
      "Waterford",
      "Stillwater",
      "Round Lake",
      "Malta",
      "Albany",
      "Ballston Spa"
    ],
    note: "And all surrounding Capital Region communities",
    // Unique content for each service area to eliminate duplicate content issues
    areaContent: {
      "Mechanicville": {
        description: "As our home base, Mechanicville offers the fastest dumpster delivery in the Capital Region. Our local expertise and quick response times make us the preferred choice for dumpster rental in Mechanicville, NY.",
        highlights: ["Fastest delivery times", "Local expertise", "Community knowledge", "Same-day service guaranteed"],
        localInfo: "Located in Saratoga County, Mechanicville is known for its industrial heritage and convenient access to major highways including I-87 and Route 9.",
        popularProjects: ["Home renovations", "Garage cleanouts", "Yard waste removal", "Construction debris"]
      },
      "Clifton Park": {
        description: "Serving Clifton Park with premium dumpster rental services. Our team understands the unique needs of this growing suburban community and provides reliable waste management solutions.",
        highlights: ["Suburban expertise", "Flexible scheduling", "Competitive pricing", "Professional service"],
        localInfo: "Clifton Park is a rapidly growing town in Saratoga County, known for its excellent schools, shopping centers, and family-friendly neighborhoods.",
        popularProjects: ["Kitchen remodels", "Bathroom renovations", "Deck removal", "Landscaping projects"]
      },
      "Saratoga Springs": {
        description: "Premium dumpster rental services in Saratoga Springs, NY. From historic home renovations to commercial projects, we provide the right dumpster size for every project in this historic city.",
        highlights: ["Historic home expertise", "Commercial project support", "Tourist season awareness", "Premium service"],
        localInfo: "Famous for its thoroughbred racing, Saratoga Springs combines historic charm with modern amenities, making it a unique location for construction and renovation projects.",
        popularProjects: ["Historic renovations", "Commercial cleanouts", "Event venue projects", "Residential upgrades"]
      },
      "Troy": {
        description: "Reliable dumpster rental in Troy, NY. Our experienced team serves this historic city with efficient waste management solutions for both residential and commercial projects.",
        highlights: ["Urban project expertise", "Historic building knowledge", "Commercial support", "Reliable service"],
        localInfo: "Troy is a historic city in Rensselaer County, known for its rich architectural heritage and vibrant downtown area with many renovation and restoration projects.",
        popularProjects: ["Historic restorations", "Commercial renovations", "Multi-family projects", "Downtown developments"]
      },
      "Waterford": {
        description: "Professional dumpster rental services in Waterford, NY. Located at the confluence of the Hudson and Mohawk Rivers, we provide reliable waste management for this unique waterfront community.",
        highlights: ["Waterfront project expertise", "Environmental awareness", "Local knowledge", "Flexible scheduling"],
        localInfo: "Waterford is a historic village in Saratoga County, known for its canal heritage and waterfront properties that often require specialized waste management solutions.",
        popularProjects: ["Waterfront renovations", "Canal-side projects", "Historic home updates", "Landscaping work"]
      },
      "Stillwater": {
        description: "Dumpster rental services in Stillwater, NY. Our local team understands the rural and suburban mix of this community and provides tailored waste management solutions.",
        highlights: ["Rural project expertise", "Agricultural knowledge", "Flexible delivery", "Local service"],
        localInfo: "Stillwater is a town in Saratoga County that combines rural charm with suburban convenience, offering diverse project types from farm cleanouts to modern home renovations.",
        popularProjects: ["Farm cleanouts", "Rural renovations", "Agricultural projects", "Residential upgrades"]
      },
      "Round Lake": {
        description: "Efficient dumpster rental in Round Lake, NY. Serving this lakeside community with reliable waste management for all types of projects, from small cleanouts to major renovations.",
        highlights: ["Lakeside project expertise", "Seasonal awareness", "Quick response", "Local knowledge"],
        localInfo: "Round Lake is a village in Saratoga County known for its beautiful lake and seasonal population changes, requiring flexible and responsive waste management services.",
        popularProjects: ["Lakeside renovations", "Seasonal cleanouts", "Vacation home projects", "Landscaping work"]
      },
      "Malta": {
        description: "Professional dumpster rental in Malta, NY. Our team serves this growing tech corridor community with reliable waste management solutions for modern development projects.",
        highlights: ["Tech corridor expertise", "Modern development support", "Innovation awareness", "Professional service"],
        localInfo: "Malta is a rapidly developing town in Saratoga County, home to the GlobalFoundries semiconductor plant and many modern development projects requiring efficient waste management.",
        popularProjects: ["Modern home renovations", "Commercial developments", "Tech facility projects", "New construction support"]
      },
      "Albany": {
        description: "Comprehensive dumpster rental services in Albany, NY. As the capital of New York State, we provide reliable waste management solutions for government buildings, commercial properties, and residential projects throughout the city.",
        highlights: ["Government building expertise", "Commercial project support", "Urban project knowledge", "Capital city service"],
        localInfo: "Albany is the capital of New York State, featuring a mix of historic architecture, government buildings, and modern commercial developments requiring specialized waste management services.",
        popularProjects: ["Government building projects", "Commercial renovations", "Historic building updates", "Urban development"]
      },
      "Ballston Spa": {
        description: "Professional dumpster rental in Ballston Spa, NY. Our experienced team serves this charming village with reliable waste management solutions for both historic preservation projects and modern developments.",
        highlights: ["Historic preservation expertise", "Village project knowledge", "Flexible scheduling", "Local service"],
        localInfo: "Ballston Spa is a historic village in Saratoga County, known for its charming downtown, historic architecture, and mix of residential and commercial projects.",
        popularProjects: ["Historic home renovations", "Downtown improvements", "Residential cleanouts", "Commercial updates"]
      }
    }
  },

  // FAQ Data - Enhanced for AI understanding
  faqs: [
    {
      question: "What areas do you service?",
      answer: "We service the Capital Region including Mechanicville, Clifton Park, Saratoga Springs, Troy, and surrounding areas.",
      category: "Service Area",
      keywords: ["service area", "coverage", "locations"]
    },
    {
      question: "Do I need a permit?",
      answer: "If the dumpster will be placed on your private property, no permit is needed. For street placement, local permits may be required.",
      category: "Permits",
      keywords: ["permit", "requirements", "street placement"]
    },
    {
      question: "What is your payment policy?",
      answer: "We will send you an invoice after the dumpster is picked up and weighed to assess the cost.",
      category: "Payment",
      keywords: ["payment", "invoice", "cost", "pricing"]
    },
    {
      question: "What items are not accepted?",
      answer: "We do not accept hazardous materials, tv's, liquid paint, and certain other items. Some additional items come at an extra charge",
      category: "Restrictions",
      keywords: ["prohibited items", "hazardous materials", "not accepted"]
    },
    {
      question: "Can the dumpster be filled over the top?",
      answer: "No, there is a fill line on the dumpster, but we offer a drop swap service to get you an empty dumpster when picking your full one up.",
      category: "Usage",
      keywords: ["fill line", "drop swap", "capacity"]
    },
    {
      question: "Should the dumpster be kept covered?",
      answer: "We recommend you keep it covered to avoid water causing any additional weight as it could increase the cost of the rental.",
      category: "Usage",
      keywords: ["covered", "water", "weight", "cost"]
    },
    {
      question: "Will the dumpster damage my property?",
      answer: "No! We will place the dumpster down safely and on blocks of wood to avoid any damage to your property.",
      category: "Safety",
      keywords: ["damage", "safety", "property protection"]
    }
  ],

  // SEO Content - Enhanced for AI search engines
  seoContent: {
    home: {
      title: "Dumpster Rental Mechanicville NY | The Dumpster Man - Same Day Delivery",
      description: "Professional dumpster rental in Mechanicville NY and Capital Region. Same-day delivery, competitive pricing. 12-25 yard dumpsters for residential & commercial projects. Call (518) 920-2618!",
      keywords: "dumpster rental mechanicville ny, capital region dumpster rental, same day dumpster delivery, construction dumpster rental, residential dumpster rental, commercial dumpster rental, waste management mechanicville ny",
      aiKeywords: ["dumpster rental", "waste removal", "construction debris", "residential cleanout", "commercial waste", "same day delivery", "mechanicville ny", "capital region"]
    },
    services: {
      title: "Dumpster Sizes & Pricing Mechanicville NY | 12-25 Yard Dumpsters - The Dumpster Man",
      description: "Choose from 12-25 yard dumpsters in Mechanicville NY and Capital Region. Competitive pricing, same-day delivery. Perfect for construction, cleanouts, and yard waste. Get your quote today!",
      keywords: "dumpster sizes mechanicville ny, dumpster pricing capital region, 12 yard dumpster, 16 yard dumpster, 20 yard dumpster, 25 yard dumpster, construction waste removal",
      aiKeywords: ["dumpster sizes", "pricing", "construction waste", "residential projects", "commercial projects", "waste disposal"]
    },
    contact: {
      title: "Contact Dumpster Rental Mechanicville NY | Free Quote - The Dumpster Man",
      description: "Get a free dumpster rental quote in Mechanicville NY and Capital Region. Fast response, competitive rates. Same-day delivery available. Call (518) 920-2618 for immediate service!",
      keywords: "dumpster rental quote mechanicville ny, contact dumpster service, same day dumpster delivery, waste management quote, construction dumpster rental",
      aiKeywords: ["quote", "contact", "same day delivery", "waste management", "construction services"]
    },
    faq: {
      title: "Dumpster Rental FAQ Mechanicville NY | Common Questions - The Dumpster Man",
      description: "Find answers about dumpster rental in Mechanicville NY. Permits, pricing, service areas, and more. Expert guidance for waste management in the Capital Region. Call (518) 920-2618!",
      keywords: "dumpster rental faq mechanicville ny, dumpster permit requirements, dumpster pricing questions, waste management faq, construction dumpster questions",
      aiKeywords: ["FAQ", "permit requirements", "pricing", "service areas", "waste management"]
    }
  },

  // Navigation
  navigation: [
    { path: "/", label: "Home" },
    { path: "/dumpster-sizes", label: "Dumpster Sizes" },
    { path: "/service-areas", label: "Service Areas" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" }
  ],

  // Features and Benefits - Enhanced for AI understanding
  features: [
    {
      title: "Same Day Dumpster Delivery Albany NY",
      description: "Need a dumpster today? We offer same-day delivery service throughout Albany NY and the Capital Region. Our efficient team ensures quick response times for urgent waste management needs.",
      benefits: ["Immediate availability", "Quick response", "Emergency service", "Convenient scheduling"],
      useCases: ["Emergency cleanouts", "Last-minute projects", "Time-sensitive construction"]
    },
    {
      title: "Multiple Dumpster Sizes Albany NY",
      description: "Choose from our range of 12, 16, 20, and 25-yard dumpsters in Albany NY. Perfect for residential cleanouts, construction projects, and commercial use. Not sure what size you need? Our experts will help you choose.",
      benefits: ["Flexible options", "Expert guidance", "Cost-effective choices", "Project-specific solutions"],
      useCases: ["Residential projects", "Commercial construction", "Renovation projects", "Cleanout services"]
    },
    {
      title: "Local Albany NY Service Area",
      description: "Proudly serving Albany NY, Mechanicville, Clifton Park, Saratoga Springs, Troy, and surrounding Capital Region areas. Local, reliable, and professional dumpster rental service for all your needs.",
      benefits: ["Local expertise", "Quick delivery", "Community knowledge", "Reliable service"],
      useCases: ["Local construction", "Community projects", "Residential services", "Commercial waste management"]
    }
  ],

  // Why Choose Us - Enhanced for AI understanding
  whyChooseUs: [
    {
      title: "Fast Delivery Albany NY",
      description: "Same-day and next-day delivery available throughout Albany NY and the Capital Region. Our efficient team ensures quick response times for all your waste management needs. Call (518) 920-2618 for immediate service.",
      advantages: ["Same-day service", "Quick response", "Reliable delivery", "Emergency availability"],
      testimonials: ["Fastest delivery in the area", "Always on time", "Great emergency service"]
    },
    {
      title: "Best Price Guarantee Albany NY",
      description: "We offer competitive pricing with no hidden fees in Albany NY and Capital Region. Our transparent pricing ensures you get the best value for dumpster rental. Contact us today for a free quote.",
      advantages: ["Competitive pricing", "No hidden fees", "Transparent quotes", "Best value"],
      testimonials: ["Best prices around", "No surprise fees", "Great value for money"]
    }
  ],

  // Comprehensive Content Sections for SEO
  contentSections: {
    home: {
      hero: {
        title: "Professional Dumpster Rental in Mechanicville NY & Capital Region",
        subtitle: "Same-Day Delivery • Competitive Pricing • Local Service",
        description: "The Dumpster Man provides reliable, professional dumpster rental services throughout Mechanicville NY and the Capital Region. With same-day delivery, competitive pricing, and multiple dumpster sizes, we're your trusted partner for all waste management needs. Whether you're tackling a home renovation, construction project, or residential cleanout, our experienced team ensures efficient service and exceptional customer care."
      },
      about: {
        title: "Your Trusted Waste Management Partner in Mechanicville NY",
        content: "Based in Mechanicville, NY, The Dumpster Man has been serving the Capital Region for years, building a reputation for reliability, professionalism, and exceptional customer service. Our commitment to the local community drives everything we do, from providing same-day delivery to offering competitive pricing that fits your budget. We understand that every project is unique, which is why we offer flexible dumpster sizes and personalized service to meet your specific needs. Our experienced team is knowledgeable about local regulations and can help you navigate permit requirements, ensuring your project runs smoothly from start to finish."
      },
      services: {
        title: "Comprehensive Dumpster Rental Services in Mechanicville NY",
        content: "Our comprehensive dumpster rental services are designed to handle projects of all sizes. From small residential cleanouts to large commercial construction projects, we have the right dumpster size for your needs. Our 12-yard dumpsters are perfect for garage cleanouts and small remodeling projects, while our 25-yard dumpsters can handle major construction and demolition projects. Each dumpster comes with our commitment to safe, professional delivery and pickup, ensuring your project stays on schedule. We also offer flexible rental periods and can accommodate urgent requests with our same-day delivery service."
      },
      benefits: {
        title: "Why Choose The Dumpster Man for Your Mechanicville NY Project",
        content: "When you choose The Dumpster Man for your dumpster rental needs, you're choosing a local company that understands the unique challenges of projects in the Capital Region. Our same-day delivery service means you can start your project immediately, without waiting for equipment to arrive. Our competitive pricing ensures you get the best value for your money, with no hidden fees or surprise charges. We're committed to environmental responsibility and work with local waste processing facilities to ensure proper disposal of all materials. Our customer service team is available to answer questions and provide guidance throughout your rental period."
      }
    },
    services: {
      overview: {
        title: "Complete Guide to Dumpster Sizes and Pricing in Mechanicville NY",
        content: "Choosing the right dumpster size is crucial for the success of your project and your budget. Our comprehensive guide helps you understand the capacity, dimensions, and best uses for each dumpster size we offer. The 12-yard dumpster is ideal for small residential projects like garage cleanouts or minor renovations, while the 16-yard option works well for medium-sized home renovations and construction debris removal. For larger projects, our 20-yard dumpsters handle commercial cleanouts and major renovations, and our 25-yard dumpsters are perfect for large-scale construction and demolition projects. Each size is designed with specific project types in mind, ensuring you get the most efficient and cost-effective solution for your needs."
      },
      detailedInfo: {
        title: "Detailed Dumpster Specifications and Project Planning",
        content: "Understanding dumpster specifications helps you plan your project more effectively. Our 12-yard dumpsters measure 8' x 6' x 4' and can hold approximately 2-3 tons of material, making them perfect for residential projects with limited space. The 16-yard dumpsters measure 12' x 8' x 4' and can handle 3-4 tons, ideal for kitchen remodels and bathroom renovations. Our 20-yard dumpsters measure 14' x 8' x 4' and can accommodate 4-5 tons, suitable for large renovations and commercial projects. The largest option, our 25-yard dumpsters measure 16' x 8' x 4' and can handle 5-6 tons, perfect for major construction and demolition projects. Each dumpster comes with clear fill lines and our team provides guidance on proper loading to maximize capacity and ensure safe transport."
      },
      pricing: {
        title: "Transparent Pricing and Cost Considerations for Mechanicville NY Projects",
        content: "We believe in transparent pricing with no hidden fees, ensuring you know exactly what your dumpster rental will cost. Our pricing is competitive within the Mechanicville NY market and varies based on dumpster size, rental duration, and project location. We offer flexible rental periods to accommodate your project timeline, and our team works with you to find the most cost-effective solution for your specific needs. Additional fees may apply for certain items like mattresses and tires, and we provide clear information about these charges upfront. For projects outside our standard service area, we offer extended service with additional fees clearly communicated. Our goal is to provide exceptional value while maintaining the high-quality service our customers expect."
      }
    },
    contact: {
      overview: {
        title: "Get Your Free Dumpster Rental Quote in Mechanicville NY",
        content: "Ready to start your project? Contact The Dumpster Man today for a free, no-obligation quote on your dumpster rental. Our experienced team will help you choose the right dumpster size for your project and provide detailed pricing information. We understand that every project is unique, which is why we take the time to understand your specific needs and requirements. Whether you're planning a residential renovation, commercial construction project, or residential cleanout, our team provides personalized service and expert guidance. We're available to answer questions about dumpster sizes, rental periods, permit requirements, and any other concerns you may have about your waste management needs."
      },
      process: {
        title: "Simple and Efficient Dumpster Rental Process in Mechanicville NY",
        content: "Our dumpster rental process is designed to be simple and efficient, getting you the equipment you need when you need it. The process begins with a consultation where we discuss your project requirements, timeline, and budget. Our team helps you select the appropriate dumpster size and provides detailed pricing information. Once you approve the quote, we schedule delivery at your convenience, with same-day delivery available for urgent projects. Our professional team handles all aspects of delivery and pickup, ensuring safe placement and removal of the dumpster. Throughout your rental period, our customer service team is available to answer questions and provide support. We also handle all waste disposal and recycling, ensuring environmentally responsible disposal of your project materials."
      }
    },
    faq: {
      overview: {
        title: "Frequently Asked Questions About Dumpster Rental in Mechanicville NY",
        content: "We understand that dumpster rental can raise many questions, especially for first-time customers. Our comprehensive FAQ section addresses the most common concerns about dumpster sizes, pricing, permits, and service areas. Whether you're wondering about the right dumpster size for your project, concerned about permit requirements, or curious about our service area coverage, you'll find detailed answers here. We've organized our FAQs by category to help you quickly find the information you need. Our team is also available by phone to answer any additional questions and provide personalized guidance for your specific project requirements."
      },
      detailed: {
        title: "Comprehensive Information About Dumpster Rental Services",
        content: "Our detailed FAQ section covers every aspect of dumpster rental, from initial planning to final disposal. We provide information about dumpster specifications, including dimensions, weight limits, and capacity for each size we offer. Our FAQ also addresses common concerns about placement, including driveway requirements, space considerations, and accessibility issues. We explain our pricing structure, including base costs, additional fees, and factors that may affect your final price. Information about our service area helps you understand coverage and delivery times for your specific location. We also address environmental considerations, explaining our commitment to proper waste disposal and recycling practices."
      }
    }
  },


  // AI-Optimized Content for Search Engines
  aiContent: {
    businessType: "Waste Management Service",
    industry: "Construction and Demolition Waste",
    services: [
      "Dumpster Rental",
      "Construction Waste Removal",
      "Residential Cleanout Services",
      "Commercial Waste Management",
      "Same Day Delivery",
      "Emergency Waste Services"
    ],
    targetAudience: [
      "Homeowners",
      "Contractors",
      "Construction Companies",
      "Property Managers",
      "Real Estate Developers",
      "Commercial Businesses"
    ],
    commonQuestions: [
      "How much does dumpster rental cost?",
      "What size dumpster do I need?",
      "How long can I keep a dumpster?",
      "Do I need a permit for a dumpster?",
      "What items can I put in a dumpster?",
      "How quickly can you deliver a dumpster?"
    ],
    relatedServices: [
      "Construction Debris Removal",
      "Residential Cleanout",
      "Commercial Waste Disposal",
      "Yard Waste Removal",
      "Demolition Waste",
      "Renovation Debris"
    ]
  },

  // SEO Strategy for Backlink Recovery and AI Optimization
  seoStrategy: {
    localBusiness: {
      name: "The Dumpster Man Mechanicville NY",
      serviceArea: "Mechanicville NY, Capital Region, Albany, Clifton Park, Saratoga Springs, Troy",
      services: [
        "Dumpster Rental Mechanicville NY",
        "Construction Waste Removal",
        "Residential Cleanout Services",
        "Commercial Dumpster Rental",
        "Same Day Dumpster Delivery"
      ],
      keywords: [
        "dumpster rental mechanicville ny",
        "capital region dumpster rental",
        "same day dumpster delivery",
        "construction dumpster rental",
        "residential dumpster rental",
        "commercial dumpster rental",
        "waste management mechanicville ny",
        "dumpster sizes mechanicville ny",
        "dumpster pricing capital region"
      ]
    },
    aiOptimization: {
      semanticKeywords: [
        "waste disposal",
        "construction debris",
        "residential cleanout",
        "commercial waste",
        "dumpster sizes",
        "waste management",
        "construction waste removal",
        "demolition debris"
      ],
      entityTypes: [
        "LocalBusiness",
        "WasteManagementService",
        "ConstructionService",
        "ResidentialService"
      ],
      contentStructure: {
        headings: ["H1", "H2", "H3"],
        lists: ["ul", "ol"],
        tables: ["pricing", "sizes", "features"],
        schema: ["LocalBusiness", "Service", "FAQ", "Review"]
      }
    }
  }
};

export default siteConfig; 