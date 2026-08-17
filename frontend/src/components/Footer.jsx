import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="footer-logo">
            ELECTRI<span>X</span>A
          </div>

          <p>
            Empowering learners to master technologies
            and build innovative solutions for a
            better tomorrow.
          </p>

          <div className="social-icons">
            <span>▶</span>
            <span>◎</span>
            <span>in</span>
            <span>f</span>
          </div>

        </div>


        <div className="footer-column">

          <h3>COMPANY</h3>

          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>

        </div>


        <div className="footer-column">

          <h3>LEARN</h3>

          <Link to="/courses">Courses</Link>
          <Link to="/project-order">Projects</Link>
          <Link to="/blog">Tutorials</Link>
          <Link to="/certification">Certification</Link>

        </div>


        <div className="footer-column">

          <h3>SHOP</h3>

          <Link to="/kits">Kits</Link>
          <Link to="/components">Components</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/merchandise">Merchandise</Link>

        </div>


        <div className="footer-column">

          <h3>SUPPORT</h3>

          <Link to="/help">Help Center</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Return Policy</Link>

        </div>


        <div className="footer-column">

          <h3>CONTACT</h3>

          <p>✉ info@electrixa.com</p>
          <p>☎ +91 98765 43210</p>
          <p>📍 India</p>

        </div>

      </div>


      <div className="footer-bottom">
        © 2026 Electrixa. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;