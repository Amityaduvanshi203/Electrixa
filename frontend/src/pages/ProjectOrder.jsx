import React, { useState } from "react";
import "./ProjectOrder.css";

import heroImage from "../assets/HERO.png";
import adsImage from "../assets/ads.jpeg";

const ProjectOrder = () => {
  const initialFormData = {
    fullName: "",
    email: "",
    mobile: "",
    college: "",
    branchYear: "",
    category: "",
    title: "",
    description: "",
    budget: "",
    deliveryDate: "",
    requirements: null,
    additionalRequirements: {
      hardwareKit: false,
      sourceCode: false,
      reportPPT: false,
      circuitDiagram: false,
      pcb: false,
      installationSupport: false,
      videoDemo: false,
      trainingGuidance: false,
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
      files,
    } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0] || null,
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        additionalRequirements: {
          ...formData.additionalRequirements,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "additionalRequirements") {
          payload.append(key, JSON.stringify(value));
        } else if (key === "requirements") {
          if (value) {
            payload.append("requirements", value);
          }
        } else {
          payload.append(key, value);
        }
      });

      const response = await fetch("/api/order", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to send order request."
        );
      }

      setSubmitStatus({
        success: true,
        message:
          result.message ||
          "Your order request has been sent. We will contact you soon.",
      });

      setFormData(initialFormData);

      const fileInput =
        document.getElementById("file-upload");

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // =====================================================
  // PROCESS STEPS
  // =====================================================

  const processSteps = [
    {
      number: "01",
      title: "Submit Requirement",
    },
    {
      number: "02",
      title: "Discussion with Expert",
    },
    {
      number: "03",
      title: "Get Price Quotation",
    },
    {
      number: "04",
      title: "Pay Advance",
    },
    {
      number: "05",
      title: "Development Starts",
    },
    {
      number: "06",
      title: "Testing & Delivery",
    },
    {
      number: "07",
      title: "Lifetime Support",
    },
  ];

  // =====================================================
  // WHY CHOOSE
  // =====================================================

  const whyChoose = [
    "100% Custom & Unique Projects",
    "Expert Engineers & Developers",
    "On-time Delivery",
    "Testing & Quality Assurance",
    "Complete Documentation",
    "Lifetime Support",
  ];

  return (
    <main className="project-order-page">

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <header className="po-hero">

        <div className="container po-hero-inner">

          <div className="po-hero-content">

            <span className="po-hero-label">
              ELECTRIXA PROJECT SERVICES
            </span>

            <h1>
              Build. Create.
              <br />
              <span>Innovate.</span>
            </h1>

            <p>
              Order custom hardware and software projects
              designed by our expert team. From electronics
              and embedded systems to IoT, robotics, PCB
              and software solutions.
            </p>

            <div className="po-hero-features">

              <span>✓ Custom Projects</span>

              <span>✓ Expert Development</span>

              <span>✓ On-time Delivery</span>

            </div>

            <div className="hero-actions">

              <button
                type="button"
                className="btn po-primary"
              >
                Order Custom Project
              </button>

              <button
                type="button"
                className="btn po-outline"
              >
                Get Free Quote →
              </button>

            </div>

          </div>

          <div className="po-hero-media">

            <img
              src={heroImage}
              alt="Electrixa Project Services"
            />

          </div>

        </div>

      </header>


      {/* =================================================
          PROJECT SHOWCASE
      ================================================= */}

      <section className="project-showcase">

        <div className="container">


          {/* =================================================
              SOFTWARE PROJECTS
          ================================================= */}

          <div className="project-showcase-group">

            <div className="project-showcase-title">

              <span className="showcase-line"></span>

              <h2>
                Software Projects
              </h2>

              <span className="showcase-count">
                12 Projects
              </span>

            </div>


            <div className="showcase-grid">


              {/* SOFTWARE 01 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="College Management System"
                  />

                  <span className="project-number">
                    01
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    College Management System
                  </h3>

                  <p>
                    Web Application
                  </p>

                </div>

              </div>


              {/* SOFTWARE 02 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="E-Commerce Website"
                  />

                  <span className="project-number">
                    02
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    E-Commerce Website
                  </h3>

                  <p>
                    Full Stack
                  </p>

                </div>

              </div>


              {/* SOFTWARE 03 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="AI Chatbot"
                  />

                  <span className="project-number">
                    03
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    AI Chatbot
                  </h3>

                  <p>
                    AI / ML
                  </p>

                </div>

              </div>


              {/* SOFTWARE 04 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Student Dashboard"
                  />

                  <span className="project-number">
                    04
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Student Dashboard
                  </h3>

                  <p>
                    React.js
                  </p>

                </div>

              </div>


              {/* SOFTWARE 05 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Hospital Management"
                  />

                  <span className="project-number">
                    05
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Hospital Management
                  </h3>

                  <p>
                    Web + Database
                  </p>

                </div>

              </div>


              {/* SOFTWARE 06 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Mobile Application"
                  />

                  <span className="project-number">
                    06
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Mobile Application
                  </h3>

                  <p>
                    App Development
                  </p>

                </div>

              </div>


              {/* SOFTWARE 07 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Learning Management System"
                  />

                  <span className="project-number">
                    07
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Learning Management System
                  </h3>

                  <p>
                    EdTech Platform
                  </p>

                </div>

              </div>


              {/* SOFTWARE 08 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Food Delivery App"
                  />

                  <span className="project-number">
                    08
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Food Delivery App
                  </h3>

                  <p>
                    Full Stack
                  </p>

                </div>

              </div>


              {/* SOFTWARE 09 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="AI Resume Analyzer"
                  />

                  <span className="project-number">
                    09
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    AI Resume Analyzer
                  </h3>

                  <p>
                    AI / ML
                  </p>

                </div>

              </div>


              {/* SOFTWARE 10 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Inventory Management"
                  />

                  <span className="project-number">
                    10
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Inventory Management
                  </h3>

                  <p>
                    Web + Database
                  </p>

                </div>

              </div>


              {/* SOFTWARE 11 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Job Portal"
                  />

                  <span className="project-number">
                    11
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Job Portal
                  </h3>

                  <p>
                    React + Node.js
                  </p>

                </div>

              </div>


              {/* SOFTWARE 12 */}

              <div className="showcase-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="AI Study Assistant"
                  />

                  <span className="project-number">
                    12
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    AI Study Assistant
                  </h3>

                  <p>
                    AI + Web
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              HARDWARE PROJECTS
          ================================================= */}

          <div className="project-showcase-group">

            <div className="project-showcase-title hardware-title">

              <span className="showcase-line"></span>

              <h2>
                Hardware Projects
              </h2>

              <span className="showcase-count">
                12 Projects
              </span>

            </div>


            <div className="showcase-grid">


              {/* HARDWARE 01 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Smart Home Automation"
                  />

                  <span className="project-number">
                    01
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Smart Home Automation
                  </h3>

                  <p>
                    IoT
                  </p>

                </div>

              </div>


              {/* HARDWARE 02 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Smart Agriculture System"
                  />

                  <span className="project-number">
                    02
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Smart Agriculture System
                  </h3>

                  <p>
                    ESP32 + Sensors
                  </p>

                </div>

              </div>


              {/* HARDWARE 03 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Line Following Robot"
                  />

                  <span className="project-number">
                    03
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Line Following Robot
                  </h3>

                  <p>
                    Robotics
                  </p>

                </div>

              </div>


              {/* HARDWARE 04 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Solar Monitoring System"
                  />

                  <span className="project-number">
                    04
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Solar Monitoring System
                  </h3>

                  <p>
                    Embedded + IoT
                  </p>

                </div>

              </div>


              {/* HARDWARE 05 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Smart Energy Meter"
                  />

                  <span className="project-number">
                    05
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Smart Energy Meter
                  </h3>

                  <p>
                    Electronics
                  </p>

                </div>

              </div>


              {/* HARDWARE 06 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Obstacle Avoiding Robot"
                  />

                  <span className="project-number">
                    06
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Obstacle Avoiding Robot
                  </h3>

                  <p>
                    Arduino
                  </p>

                </div>

              </div>


              {/* HARDWARE 07 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Weather Monitoring System"
                  />

                  <span className="project-number">
                    07
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Weather Monitoring System
                  </h3>

                  <p>
                    IoT + Sensors
                  </p>

                </div>

              </div>


              {/* HARDWARE 08 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Smart Street Light"
                  />

                  <span className="project-number">
                    08
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Smart Street Light
                  </h3>

                  <p>
                    Automation
                  </p>

                </div>

              </div>


              {/* HARDWARE 09 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Water Level Controller"
                  />

                  <span className="project-number">
                    09
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Water Level Controller
                  </h3>

                  <p>
                    Embedded
                  </p>

                </div>

              </div>


              {/* HARDWARE 10 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Fire Detection System"
                  />

                  <span className="project-number">
                    10
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Fire Detection System
                  </h3>

                  <p>
                    Arduino + Sensors
                  </p>

                </div>

              </div>


              {/* HARDWARE 11 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Smart Parking System"
                  />

                  <span className="project-number">
                    11
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Smart Parking System
                  </h3>

                  <p>
                    IoT + Automation
                  </p>

                </div>

              </div>


              {/* HARDWARE 12 */}

              <div className="showcase-card hardware-card">

                <div className="showcase-image">

                  <img
                    src={adsImage}
                    alt="Industrial Monitoring System"
                  />

                  <span className="project-number">
                    12
                  </span>

                </div>

                <div className="showcase-card-content">

                  <h3>
                    Industrial Monitoring System
                  </h3>

                  <p>
                    ESP32 + IoT
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PROCESS SECTION
      ================================================= */}

      <section className="po-process container">

        <h3>
          How Project Order Works
        </h3>

        <div className="process-line">

          {processSteps.map((step, index) => (

            <div
              key={index}
              className="process-item"
            >

              <span className="step-number">
                {step.number}
              </span>

              <small>
                {step.title}
              </small>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          ORDER FORM
      ================================================= */}

      <section className="po-order container">

        <div className="order-grid">

          <form
            className="order-form"
            onSubmit={handleSubmit}
          >

            <h3>
              Order Custom Project
            </h3>

            <p className="form-subtitle">
              Fill the form below and we will get back
              to you with the best solution.
            </p>


            {/* STATUS */}

            {submitStatus && (

              <div
                className={`status-message ${
                  submitStatus.success
                    ? "success"
                    : "error"
                }`}
              >
                {submitStatus.message}
              </div>

            )}


            {/* NAME + EMAIL */}

            <div className="row">

              <div className="form-group">

                <label>
                  Full Name{" "}
                  <span className="required">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address{" "}
                  <span className="required">
                    *
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            {/* MOBILE + COLLEGE */}

            <div className="row">

              <div className="form-group">

                <label>
                  Mobile Number{" "}
                  <span className="required">
                    *
                  </span>
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  College / School Name
                </label>

                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your institute name"
                />

              </div>

            </div>


            {/* BRANCH + CATEGORY */}

            <div className="row">

              <div className="form-group">

                <label>
                  Branch & Year
                </label>

                <select
                  name="branchYear"
                  value={formData.branchYear}
                  onChange={handleChange}
                >

                  <option value="">
                    Select branch & year
                  </option>

                  <option value="Computer Science - 1st Year">
                    Computer Science - 1st Year
                  </option>

                  <option value="Computer Science - 2nd Year">
                    Computer Science - 2nd Year
                  </option>

                  <option value="Computer Science - 3rd Year">
                    Computer Science - 3rd Year
                  </option>

                  <option value="Computer Science - 4th Year">
                    Computer Science - 4th Year
                  </option>

                  <option value="Electronics - 1st Year">
                    Electronics - 1st Year
                  </option>

                  <option value="Electronics - 2nd Year">
                    Electronics - 2nd Year
                  </option>

                  <option value="Electronics - 3rd Year">
                    Electronics - 3rd Year
                  </option>

                  <option value="Electronics - 4th Year">
                    Electronics - 4th Year
                  </option>

                  <option value="Electrical - 1st Year">
                    Electrical - 1st Year
                  </option>

                  <option value="Electrical - 2nd Year">
                    Electrical - 2nd Year
                  </option>

                  <option value="Electrical - 3rd Year">
                    Electrical - 3rd Year
                  </option>

                  <option value="Electrical - 4th Year">
                    Electrical - 4th Year
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Project Category{" "}
                  <span className="required">
                    *
                  </span>
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select category
                  </option>

                  <option value="Electrical Projects">
                    Electrical Projects
                  </option>

                  <option value="Electronics Projects">
                    Electronics Projects
                  </option>

                  <option value="Embedded Systems">
                    Embedded Systems
                  </option>

                  <option value="IoT & AI Projects">
                    IoT & AI Projects
                  </option>

                  <option value="Robotics Projects">
                    Robotics Projects
                  </option>

                  <option value="Software Projects">
                    Software Projects
                  </option>

                  <option value="Web & App Development">
                    Web & App Development
                  </option>

                  <option value="Final Year Projects">
                    Final Year Projects
                  </option>

                  <option value="Mini Projects">
                    Mini Projects
                  </option>

                  <option value="PCB Design Services">
                    PCB Design Services
                  </option>

                </select>

              </div>

            </div>


            {/* PROJECT TITLE */}

            <div className="form-group">

              <label>
                Project Title{" "}
                <span className="required">
                  *
                </span>
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter project title"
                required
              />

            </div>


            {/* DESCRIPTION */}

            <div className="form-group">

              <label>
                Project Description{" "}
                <span className="required">
                  *
                </span>
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project in detail..."
                rows="5"
                required
              />

            </div>


            {/* BUDGET + DATE */}

            <div className="row">

              <div className="form-group">

                <label>
                  Budget (₹)
                </label>

                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Enter your budget"
                />

              </div>


              <div className="form-group">

                <label>
                  Delivery Date{" "}
                  <span className="required">
                    *
                  </span>
                </label>

                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* FILE UPLOAD */}

            <div className="form-group">

              <label>
                Upload Requirements (PDF/PPT)
              </label>

              <div className="file-upload-wrapper">

                <input
                  type="file"
                  id="file-upload"
                  name="requirements"
                  onChange={handleChange}
                  accept=".pdf,.ppt,.pptx"
                />

                <label
                  htmlFor="file-upload"
                  className="file-upload-label"
                >
                  Choose File
                </label>

                <span className="file-name">

                  {formData.requirements
                    ? formData.requirements.name
                    : "No file chosen"}

                </span>

              </div>

            </div>


            {/* ADDITIONAL REQUIREMENTS */}

            <div className="form-group">

              <label>
                Additional Requirements
                (Select as needed)
              </label>

              <div className="checkboxes">

                <label>

                  <input
                    type="checkbox"
                    name="hardwareKit"
                    checked={
                      formData
                        .additionalRequirements
                        .hardwareKit
                    }
                    onChange={handleChange}
                  />

                  Need Hardware Kit

                </label>


                <label>

                  <input
                    type="checkbox"
                    name="sourceCode"
                    checked={
                      formData
                        .additionalRequirements
                        .sourceCode
                    }
                    onChange={handleChange}
                  />

                  Need Source Code

                </label>


                <label>

                  <input
                    type="checkbox"
                    name="reportPPT"
                    checked={
                      formData
                        .additionalRequirements
                        .reportPPT
                    }
                    onChange={handleChange}
                  />

                  Need Report & PPT

                </label>


                <label>

                  <input
                    type="checkbox"
                    name="circuitDiagram"
                    checked={
                      formData
                        .additionalRequirements
                        .circuitDiagram
                    }
                    onChange={handleChange}
                  />

                  Need Circuit Diagram

                </label>


                <label>

                  <input
                    type="checkbox"
                    name="pcb"
                    checked={
                      formData
                        .additionalRequirements
                        .pcb
                    }
                    onChange={handleChange}
                  />

                  Need PCB

                </label>


                <label>

                  <input
                    type="checkbox"
                    name="installationSupport"
                    checked={
                      formData
                        .additionalRequirements
                        .installationSupport
                    }
                    onChange={handleChange}
                  />

                  Need Installation Support

                </label>


                <label>

                  <input
                    type="checkbox"
                    name="videoDemo"
                    checked={
                      formData
                        .additionalRequirements
                        .videoDemo
                    }
                    onChange={handleChange}
                  />

                  Need Video Demonstration

                </label>


                <label>

                  <input
                    type="checkbox"
                    name="trainingGuidance"
                    checked={
                      formData
                        .additionalRequirements
                        .trainingGuidance
                    }
                    onChange={handleChange}
                  />

                  Need Training / Guidance

                </label>

              </div>

            </div>


            {/* FORM BUTTONS */}

            <div className="form-actions">

              <button
                type="button"
                className="btn outline"
              >
                Get Free Quote →
              </button>

              <button
                type="submit"
                className="btn primary"
                disabled={isSubmitting}
              >

                {isSubmitting
                  ? "Submitting..."
                  : "Place Order Now"}

              </button>

            </div>

          </form>


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="order-sidebar">


            {/* WHY ELECTRIXA */}

            <div className="card">

              <h4>
                Why Order From Electrixa?
              </h4>

              <ul>

                {whyChoose.map((item, index) => (

                  <li key={index}>
                    ✓ {item}
                  </li>

                ))}

              </ul>

            </div>


            {/* STATS */}

            <div className="card stats">

              <h4>
                Projects Delivered
              </h4>

              <div className="stat-big">
                500+
              </div>

              <p>
                Trusted by students and professionals
                across India.
              </p>

            </div>


            {/* CONTACT */}

            <div className="card contact-card">

              <h4>
                Need Help?
              </h4>

              <p>
                Talk to our experts for guidance
              </p>

              <button className="btn whatsapp">
                💬 Chat on WhatsApp
              </button>

              <button className="btn call">
                📞 Call Us: +91 98765 43210
              </button>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
};

export default ProjectOrder;