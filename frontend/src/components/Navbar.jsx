import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img src={icon} alt="Electrixa Logo" className="brand-icon" />

          <div className="brand-text">
            <span className="brand-name">Electrixa</span>
            <span className="brand-tagline">
              Powering Ideas. Building Future.
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className={`site-nav ${menuOpen ? "mobile-open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/courses" onClick={closeMenu}>Courses</NavLink>
          <NavLink to="/project-order" onClick={closeMenu}>Projects/Order </NavLink>
          <NavLink to="/code" onClick={closeMenu}>code</NavLink>
          <NavLink to="/kits" onClick={closeMenu}>Kits</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
          <NavLink to="/about-us" onClick={closeMenu}>About Us</NavLink>
        </nav>

        {/* Login */}
        <div className="nav-actions">
          <button className="btn btn-secondary">
            Login / Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;