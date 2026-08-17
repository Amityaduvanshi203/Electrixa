import React from "react";
import "./Services.css";

import heroImage from "../assets/HERO.png";

const ServicesPage = () => {
  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      category: "Electrical Solutions",
      icon: "ϟ",
      iconClass: "yellow",
      description:
        "Complete electrical system design, wiring, testing and implementation.",
      items: [
        "Electrical Design",
        "Panel Design & Wiring",
        "Testing & Commissioning",
      ],
    },

    {
      category: "Electronics Solutions",
      icon: "▣",
      iconClass: "green",
      description:
        "Circuit design, PCB design, prototyping and product development.",
      items: [
        "Circuit Design",
        "PCB Layout Design",
        "Prototyping",
      ],
    },

    {
      category: "Software Development",
      icon: "</>",
      iconClass: "blue",
      description:
        "Web, desktop and backend solutions to bring your ideas to life.",
      items: [
        "Web Development",
        "Desktop Applications",
        "Backend / API Development",
      ],
    },

    {
      category: "Mobile App Development",
      icon: "▣",
      iconClass: "purple",
      description:
        "Android and cross-platform apps that are fast, secure and user-friendly.",
      items: [
        "Android App Development",
        "Cross-platform Apps",
        "UI/UX Design",
      ],
    },

    {
      category: "IoT Solutions",
      icon: "◉",
      iconClass: "cyan",
      description:
        "Smart IoT systems to connect, monitor and automate your world.",
      items: [
        "IoT System Design",
        "Sensor Integration",
        "IoT Cloud Dashboard",
      ],
    },

    {
      category: "Robotics Solutions",
      icon: "♙",
      iconClass: "violet",
      description:
        "Robotics design, integration and automation for various applications.",
      items: [
        "Robot Design",
        "Automation Systems",
        "Motion Control",
      ],
    },

    {
      category: "AI / ML Solutions",
      icon: "AI",
      iconClass: "orange",
      description:
        "Artificial Intelligence and Machine Learning solutions for smarter systems.",
      items: [
        "AI Model Development",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },

    {
      category: "PCB Design Services",
      icon: "⌁",
      iconClass: "green",
      description:
        "Professional PCB designing with high-quality layouts and files.",
      items: [
        "Schematic Design",
        "PCB Layout Design",
        "Gerber & BOM Files",
      ],
    },

    {
      category: "Project Guidance",
      icon: "◇",
      iconClass: "gold",
      description:
        "Academic and industrial project guidance for students and professionals.",
      items: [
        "Project Selection",
        "Technical Guidance",
        "Report & Documentation",
      ],
    },

    {
      category: "Maintenance & Support",
      icon: "⚙",
      iconClass: "darkblue",
      description:
        "Ongoing support and maintenance for your systems and products.",
      items: [
        "System Maintenance",
        "Bug Fixing",
        "24/7 Technical Support",
      ],
    },
  ];

  // =====================================================
  // WORK PROCESS
  // =====================================================

  const processSteps = [
    {
      number: "01",
      icon: "▤",
      title: "Requirement",
      description: "We understand your requirements.",
    },

    {
      number: "02",
      icon: "▧",
      title: "Planning",
      description: "We analyze and plan the best solution.",
    },

    {
      number: "03",
      icon: "✎",
      title: "Design",
      description: "We design and create the solution.",
    },

    {
      number: "04",
      icon: "</>",
      title: "Development",
      description: "Our experts build your solution.",
    },

    {
      number: "05",
      icon: "✓",
      title: "Testing",
      description: "We test everything for quality and errors.",
    },

    {
      number: "06",
      icon: "✉",
      title: "Delivery",
      description: "We deliver the final solution on time.",
    },

    {
      number: "07",
      icon: "◉",
      title: "Support",
      description: "We provide lifetime support and help.",
    },
  ];

  // =====================================================
  // WHY CHOOSE
  // =====================================================

  const whyChoose = [
    {
      icon: "♙",
      title: "Expert & Experienced",
      description: "Skilled professionals with industry experience.",
    },

    {
      icon: "✓",
      title: "Quality Assurance",
      description: "We deliver 100% quality products and solutions.",
    },

    {
      icon: "₹",
      title: "Affordable Pricing",
      description: "Best solutions at competitive prices.",
    },

    {
      icon: "◷",
      title: "On-time Delivery",
      description: "We respect your time and deliver on time.",
    },

    {
      icon: "◉",
      title: "24/7 Support",
      description: "We are always here to support you.",
    },

    {
      icon: "☆",
      title: "Customer Satisfaction",
      description: "Our customer's satisfaction is our top priority.",
    },
  ];

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="services-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="services-hero">

        <div className="services-hero-overlay"></div>

        <div className="services-hero-container">

          {/* HERO TEXT */}

          <div className="services-hero-content">

            <div className="services-breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">›</span>
              <span>Services</span>
            </div>

            <h1>
              Powerful Solutions
              <br />
              for <span>Every Need</span>
            </h1>

            <p>
              From idea to innovation – we provide end-to-end
              solutions in Electrical, Electronics, Software,
              IoT, AI and beyond.
            </p>

            <div className="hero-points">

              <div className="hero-point">
                <span className="point-icon">♙</span>
                <span>Expert Team</span>
              </div>

              <div className="hero-point">
                <span className="point-icon">✓</span>
                <span>Quality Assured</span>
              </div>

              <div className="hero-point">
                <span className="point-icon">◷</span>
                <span>On-time Delivery</span>
              </div>

              <div className="hero-point">
                <span className="point-icon">◉</span>
                <span>24/7 Support</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =================================================
          MAIN WHITE CONTENT
      ================================================= */}

      <main className="services-main">

        {/* =================================================
            SERVICES
        ================================================= */}

        <section className="services-section">

          <div className="section-heading">

            <h2>
              OUR <span>SERVICES</span>
            </h2>

            <p>
              We deliver innovative and reliable solutions
              tailored to your requirements.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service, index) => (

              <article
                className="service-card"
                key={index}
              >

                <div
                  className={`service-icon ${service.iconClass}`}
                >
                  {service.icon}
                </div>

                <h3>
                  {service.category}
                </h3>

                <p className="service-description">
                  {service.description}
                </p>

                <ul>

                  {service.items.map((item, itemIndex) => (

                    <li key={itemIndex}>
                      <span>✓</span>
                      {item}
                    </li>

                  ))}

                </ul>

                <button className="learn-more-btn">
                  Learn More
                  <span>→</span>
                </button>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            WORK PROCESS
        ================================================= */}

        <section className="process-section">

          <div className="process-box">

            <div className="process-heading">

              <h2>
                OUR <span>WORK PROCESS</span>
              </h2>

            </div>


            <div className="process-steps">

              {processSteps.map((step, index) => (

                <React.Fragment key={index}>

                  <div className="process-step">

                    <div className="process-icon">
                      {step.icon}
                    </div>

                    <div className="process-number">
                      {step.number}
                    </div>

                    <h4>
                      {step.title}
                    </h4>

                    <p>
                      {step.description}
                    </p>

                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="process-arrow">
                      →
                    </div>
                  )}

                </React.Fragment>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            WHY CHOOSE
        ================================================= */}

        <section className="why-section">

          <div className="section-heading why-heading">

            <h2>
              WHY CHOOSE <span>ELECTRIXA?</span>
            </h2>

          </div>


          <div className="why-grid">

            {whyChoose.map((item, index) => (

              <div
                className="why-item"
                key={index}
              >

                <div className="why-icon">
                  {item.icon}
                </div>

                <div className="why-content">

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}

        <section className="service-cta">

          <div className="cta-pattern"></div>

          <div className="cta-text">

            <h2>
              Have a <span>Project</span> in Mind?
            </h2>

            <p>
              Let's build something amazing together!
            </p>

          </div>


          <div className="cta-buttons">

            <button className="cta-primary">
              Order Custom Project
              <span>→</span>
            </button>

            <button className="cta-secondary">
              Contact Us
              <span>→</span>
            </button>

          </div>

        </section>

      </main>

    </div>
  );
};

export default ServicesPage;