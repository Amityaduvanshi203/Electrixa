import React from "react";
import "./AboutUs.css";

import heroImage from "../assets/HERO.png";
import techImage from "../assets/ads.jpeg";

const AboutPage = () => {
  const highlights = [
    {
      icon: "⚡",
      title: "Learn",
      text: "Industry-relevant courses",
    },
    {
      icon: "⚙",
      title: "Build",
      text: "Real-world projects",
    },
    {
      icon: "💡",
      title: "Innovate",
      text: "Premium technology kits",
    },
    {
      icon: "🎯",
      title: "Support",
      text: "Guidance at every step",
    },
  ];

  const missionCards = [
    {
      icon: "🎯",
      title: "Our Mission",
      text:
        "To empower learners with quality education, practical skills, and innovative solutions that help them succeed in their careers and create real-world impact.",
    },
    {
      icon: "🚀",
      title: "Our Vision",
      text:
        "To become a trusted technology platform that inspires the next generation of engineers, creators, developers and problem solvers.",
    },
    {
      icon: "💎",
      title: "Our Values",
      values: [
        "Quality & Excellence",
        "Innovation & Creativity",
        "Integrity & Transparency",
        "Customer First Approach",
      ],
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Happy Learners",
      icon: "👨‍🎓",
    },
    {
      number: "200+",
      label: "Courses",
      icon: "📚",
    },
    {
      number: "500+",
      label: "Projects Delivered",
      icon: "🚀",
    },
    {
      number: "100+",
      label: "Kits Available",
      icon: "🛠",
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: "⭐",
    },
    {
      number: "24/7",
      label: "Technical Support",
      icon: "🎧",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "The Idea",
      text:
        "Electrixa was founded with the vision of making quality technical education and practical learning accessible to everyone.",
    },
    {
      year: "2020",
      title: "Starting Small",
      text:
        "Launched our first learning programs and DIY technology kits for students, makers and hobbyists.",
    },
    {
      year: "2021",
      title: "Growing Community",
      text:
        "Expanded our learning ecosystem and reached thousands of learners across different technology domains.",
    },
    {
      year: "2022",
      title: "New Milestones",
      text:
        "Introduced project solutions, technical guidance and professional services for students and organizations.",
    },
    {
      year: "2023",
      title: "Expanding Horizons",
      text:
        "Added advanced technologies including AI, IoT, Robotics, Software Development and Embedded Systems.",
    },
    {
      year: "2024 & Beyond",
      title: "Building the Future",
      text:
        "Continuing our mission to connect education, technology and innovation through practical solutions.",
    },
  ];

  const team = [
    {
      name: "Amit Yadav",
      role: "Founder & CEO",
      image: heroImage,
    },
    {
      name: "Gomtesh",
      role: "Co-Founder & CTO",
      image: techImage,
    },
    {
      name: "Priya Sharma",
      role: "Head of Academics",
      image: heroImage,
    },
    {
      name: "Rohit Verma",
      role: "Lead Developer",
      image: techImage,
    },
    {
      name: "Sneha Patel",
      role: "Customer Success Lead",
      image: heroImage,
    },
  ];

  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-container">

          <div className="about-hero-content">

            <div className="about-breadcrumb">
              <span>Home</span>
              <span>›</span>
              <span>About Us</span>
            </div>

            <span className="about-small-title">
              ABOUT ELECTRIXA
            </span>

            <h1>
              Building Skills.
              <br />
              <span>Powering Future.</span>
            </h1>

            <p>
              Electrixa is an all-in-one technology platform for
              learners, makers and innovators. We combine education,
              practical projects, technology kits and professional
              solutions to turn ideas into reality.
            </p>

            <div className="about-hero-buttons">
              <button className="about-primary-btn">
                Explore Electrixa <span>→</span>
              </button>

              <button className="about-secondary-btn">
                Our Journey <span>→</span>
              </button>
            </div>

            <div className="about-highlights">

              {highlights.map((item, index) => (
                <div className="highlight-item" key={index}>

                  <div className="highlight-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="about-hero-image">

            <div className="hero-image-glow"></div>

            <img
              src={heroImage}
              alt="Electrixa Technology"
            />

            <div className="hero-floating-card">

              <span className="floating-icon">
                ⚡
              </span>

              <div>
                <strong>Technology</strong>
                <small>Learn • Build • Innovate</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="about-story">

        <div className="story-image">

          <div className="story-image-glow"></div>

          <img
            src={techImage}
            alt="Electrixa Innovation"
          />

          <div className="story-badge">
            <strong>Learn.</strong>
            <span>Build.</span>
            <b>Innovate.</b>
          </div>

        </div>


        <div className="story-content">

          <div className="section-label">
            OUR STORY
          </div>

          <h2>
            From an Idea
            <span> to a Mission.</span>
          </h2>

          <p>
            Electrixa started with a simple idea — to make advanced
            technology education and practical learning accessible
            to everyone.
          </p>

          <p>
            We believe that technology is best learned by building.
            That's why we bring courses, hands-on projects, hardware
            kits, software development and technical services together
            on one platform.
          </p>

          <div className="story-points">

            <div>
              <span>✓</span>
              Practical Learning
            </div>

            <div>
              <span>✓</span>
              Real-world Projects
            </div>

            <div>
              <span>✓</span>
              Industry Skills
            </div>

            <div>
              <span>✓</span>
              Innovation Focus
            </div>

          </div>

          <button className="story-btn">
            Discover Our Journey →
          </button>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION / VALUES
      ===================================================== */}

      <section className="mission-section">

        <div className="section-heading">

          <span>WHAT DRIVES US</span>

          <h2>
            Mission. Vision. <strong>Values.</strong>
          </h2>

          <p>
            Everything we do is focused on creating better
            learning and technology experiences.
          </p>

        </div>


        <div className="mission-grid">

          {missionCards.map((card, index) => (

            <div
              className="mission-card"
              key={index}
            >

              <div className="mission-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              {card.text && (
                <p>{card.text}</p>
              )}

              {card.values && (
                <ul>
                  {card.values.map((value, i) => (
                    <li key={i}>
                      <span>✓</span>
                      {value}
                    </li>
                  ))}
                </ul>
              )}

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        {stats.map((stat, index) => (

          <div
            className="about-stat"
            key={index}
          >

            <div className="stat-icon">
              {stat.icon}
            </div>

            <div>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>

          </div>

        ))}

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="journey-section">

        <div className="section-heading journey-heading">

          <span>OUR JOURNEY</span>

          <h2>
            Growing With <strong>Technology.</strong>
          </h2>

          <p>
            From a simple idea to a growing technology ecosystem.
          </p>

        </div>


        <div className="timeline">

          {timeline.map((item, index) => (

            <div
              className="timeline-item"
              key={index}
            >

              <div className="timeline-line"></div>

              <div className="timeline-dot">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="timeline-card">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          TEAM
      ===================================================== */}

      <section className="team-section">

        <div className="section-heading">

          <span>OUR PEOPLE</span>

          <h2>
            Meet Our <strong>Team.</strong>
          </h2>

          <p>
            A passionate team working together to build
            better technology experiences.
          </p>

        </div>


        <div className="team-grid">

          {team.map((member, index) => (

            <div
              className="team-card"
              key={index}
            >

              <div className="team-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

                <div className="team-overlay">
                  <span>+</span>
                </div>

              </div>

              <div className="team-info">

                <h3>{member.name}</h3>

                <p>{member.role}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY ELECTRIXA
      ===================================================== */}

      <section className="why-about">

        <div className="why-about-image">

          <img
            src={heroImage}
            alt="Why Electrixa"
          />

        </div>

        <div className="why-about-content">

          <span className="section-label">
            WHY ELECTRIXA?
          </span>

          <h2>
            More Than Just
            <span> Technology.</span>
          </h2>

          <p>
            We combine technical education, hands-on experience,
            hardware, software and innovation to create a complete
            ecosystem for learners and creators.
          </p>

          <div className="why-list">

            <div>
              <span>01</span>
              <div>
                <strong>Practical First</strong>
                <p>Learn by building real-world solutions.</p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <strong>Modern Technology</strong>
                <p>Explore AI, IoT, Embedded, Software and more.</p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <strong>Complete Ecosystem</strong>
                <p>Courses, projects, kits and services in one place.</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="cta-pattern"></div>

        <div className="about-cta-content">

          <span>READY TO BUILD THE FUTURE?</span>

          <h2>
            Let's Create Something
            <strong> Amazing.</strong>
          </h2>

          <p>
            Learn new skills, build real projects and bring
            your ideas to life with Electrixa.
          </p>

          <div className="about-cta-buttons">

            <button className="cta-primary">
              Explore Courses →
            </button>

            <button className="cta-secondary">
              Contact Us →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;