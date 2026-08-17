import React from "react";
import "./Home.css";

/* =========================================================
   IMAGES
   All images are inside: src/assets/
========================================================= */

import heroImage from "../assets/HERO.png";

import whyImage from "../assets/why.png";

import smartHomeImage from "../assets/ads.jpeg";
import solarImage from "../assets/ads.jpeg";
import droneImage from "../assets/ads.jpeg";
import faceImage from "../assets/ads.jpeg";
import robotImage from "../assets/ads.jpeg";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: "🎓",
    title: "Online Courses",
    text: "Structured courses with live & recorded classes by industry experts.",
  },
  {
    icon: "🔧",
    title: "Hardware Kits",
    text: "High quality kits for students, hobbyists and professionals.",
  },
  {
    icon: "</>",
    title: "Projects",
    text: "Real-world projects to strengthen your skills and portfolio.",
  },
  {
    icon: "💻",
    title: "Software Services",
    text: "Web, App, IoT & AI solutions for your business and ideas.",
  },
  {
    icon: "👥",
    title: "Community",
    text: "Join a growing community of learners and innovators.",
  },
  {
    icon: "🎧",
    title: "Support",
    text: "Get dedicated support whenever you need help in your journey.",
  },
];

/* =========================================================
   COURSES
========================================================= */

const courses = [
  {
    image: "/src/assets/ads.jpeg",
    category: "Electrical",
    title: "Electrical System & Design Basics",
    rating: "4.8",
    reviews: "230",
    price: "₹999",
  },
  {
    image: "/src/assets/ads.jpeg",
    category: "Electronics",
    title: "Embedded Systems with Arduino",
    rating: "4.9",
    reviews: "312",
    price: "₹1,299",
  },
  {
    image: "/src/assets/ads.jpeg",
    category: "Software",
    title: "Full Stack Web Development",
    rating: "4.7",
    reviews: "420",
    price: "₹2,499",
  },
  {
    image: "/src/assets/ads.jpeg",
    category: "AI / IoT",
    title: "AI & ML for Beginners",
    rating: "4.8",
    reviews: "180",
    price: "₹1,499",
  },
];

/* =========================================================
   FEATURED PROJECTS
   Each project has its own image variable
========================================================= */

const projects = [
  {
    image: smartHomeImage,
    title: "Smart Home",
    subtitle: "Automation",
  },
  {
    image: solarImage,
    title: "Solar Power",
    subtitle: "Management System",
  },
  {
    image: droneImage,
    title: "DIY Drone",
    subtitle: "with Camera",
  },
  {
    image: faceImage,
    title: "Real-Time Water Alarm",
    subtitle: "Water Level Monitoring",
  },
  {
    image: robotImage,
    title: "Bluetooth Controlled",
    subtitle: "Robot Car",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    icon: "🎓",
    number: "10K+",
    text: "Students",
  },
  {
    icon: "📖",
    number: "200+",
    text: "Courses",
  },
  {
    icon: "🧑‍💻",
    number: "500+",
    text: "Projects",
  },
  {
    icon: "☺",
    number: "98%",
    text: "Satisfaction",
  },
  {
    icon: "🏆",
    number: "50+",
    text: "Experts",
  },
];


const softwareProjects = [
  {
    image: smartHomeImage,
    title: "Portfolio Website",
    subtitle: "React.js",
  },
  {
    image: solarImage,
    title: "Rural Digital Learning PWA",
    subtitle: "Web Application",
  },
  {
    image: droneImage,
    title: "Student Portal",
    subtitle: "Management System",
  },
  {
    image: faceImage,
    title: "AI Chatbot",
    subtitle: "AI & Gemini API",
  },
  {
    image: robotImage,
    title: "Sentiment Analysis",
    subtitle: "NLP/ML Project",
  },
];
/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <div className="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            LEARN. BUILD.
            <span>INNOVATE.</span>
          </h1>

          <p>
            Electrixa is your all-in-one platform for Electrical,
            Electronics, Software, and Emerging Technologies.
            Learn with live classes, build real-world projects,
            and bring your ideas to life.
          </p>

          <div className="hero-buttons">

            <button className="btn-yellow">
              Explore Courses
              <span>→</span>
            </button>

            <button className="btn-outline">
              Shop Kits
            </button>

          </div>

          <div className="hero-features">

            <div className="hero-feature">
              <div className="feature-icon">♙</div>
              <div>
                <strong>Expert</strong>
                <small>Instructors</small>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">🛠</div>
              <div>
                <strong>Hands-on</strong>
                <small>Projects</small>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">▣</div>
              <div>
                <strong>Premium</strong>
                <small>Kits</small>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">♡</div>
              <div>
                <strong>Placement</strong>
                <small>Support</small>
              </div>
            </div>

          </div>

        </div>

        {/* =====================================================
            HERO IMAGE
        ===================================================== */}

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Electrixa Technology"
          />

          <div className="tech-tag tag-electrical">
            ⚡ Electrical
          </div>

          <div className="tech-tag tag-electronics">
            ▣ Electronics
          </div>

          <div className="tech-tag tag-software">
            &lt;/&gt; Software
          </div>

          <div className="tech-tag tag-ai">
            🧠 IoT & AI
          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services">

        <div className="section-heading">

          <p>Everything you need to</p>

          <h2>
            LEARN, <span>BUILD</span> & GROW
          </h2>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className={`service-icon icon-${index}`}>
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

            </div>

          ))}

        </div>

      </section>
<section className="courses-section">

  <div className="section-title-row">
    <h2>POPULAR COURSES</h2>
  </div>

  <div className="courses-main">

    <div className="course-grid">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>

          <div className="course-image">
            <img
              src={course.image}
              alt={course.title}
            />

            <span className={`course-tag tag-${index}`}>
              {course.category}
            </span>
          </div>

          <div className="course-content">

            <h3>{course.title}</h3>

            <div className="rating">
              <span>★★★★★</span>
              <small>
                {course.rating} ({course.reviews})
              </small>
            </div>

            <div className="course-price">
              <strong>{course.price}</strong>
 {/* VIEW ALL BUTTON */}
             <div className="courses-view-all">
    <a href="/courses">
      View All Courses →
    </a>
  </div>
            </div>

          </div>

        </div>
      ))}
    </div>

    <div className="why-choose">

      <img
        className="why-image"
        src={whyImage}
        alt="Why Choose Electrixa"
      />

      <div className="why-overlay"></div>

      <div className="why-content">

        <h2>WHY CHOOSE ELECTRIXA?</h2>

        <ul>
          <li><span>✓</span>Industry relevant curriculum</li>
          <li><span>✓</span>Practical, hands-on learning</li>
          <li><span>✓</span>Affordable and quality education</li>
          <li><span>✓</span>Real-world projects</li>
          <li><span>✓</span>Career guidance & support</li>
        </ul>

      </div>

    </div>

  </div>

 
  

</section>
      
{/* =====================================================
    FEATURED PROJECTS
===================================================== */}

<section className="projects-section">

  <div className="section-title-row">

    <h2>
      FEATURED PROJECTS
    </h2>

  </div>

  <div className="projects-grid">

    {projects.map((project, index) => (

      <div
        className="project-card"
        key={index}
      >

        <div className="project-image">

          <img
            src={project.image}
            alt={project.title}
          />

        </div>

        <div className="project-info">

          <h3>
            {project.title}
          </h3>

          <p>
            {project.subtitle}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>


{/* =====================================================
    SOFTWARE PROJECTS
===================================================== */}

<section className="projects-section">

  <div className="section-title-row">

    <h2>
      SOFTWARE PROJECTS
    </h2>

  </div>

  <div className="projects-grid">

    {softwareProjects.map((project, index) => (

      <div
        className="project-card"
        key={index}
      >

        <div className="project-image">

          <img
            src={project.image}
            alt={project.title}
          />

        </div>

        <div className="project-info">

          <h3>
            {project.title}
          </h3>

          <p>
            {project.subtitle}
          </p>

        </div>

      </div>

    ))}

  </div>

  {/* VIEW ALL */}

  <div className="projects-view-all">

    <a href="/project-order">
      View All →
    </a>

  </div>

</section>

      {/* =====================================================
    STATS
===================================================== */}

<section className="stats-section">
  <div className="stats">
    {stats.map((stat, index) => (
      <div className="stat" key={index}>

        <div className="stat-icon">
          {stat.icon}
        </div>

        <div className="stat-content">
          <strong>{stat.number}</strong>
          <span>{stat.text}</span>
        </div>

      </div>
    ))}
  </div>
</section>
      

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta-section">

        <div className="cta">

          <div>

            <h2>
              Ready to turn your ideas into reality?
            </h2>

            <p>
              Start learning today and build the future you imagine.
            </p>

          </div>

          <button>
            Get Started Now
            <span>→</span>
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;