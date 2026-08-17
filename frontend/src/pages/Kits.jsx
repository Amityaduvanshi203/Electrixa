import React, { useState } from "react";
import "./Kits.css";

// =====================================================
// IMAGES
// =====================================================

import heroImage from "../assets/HERO.png";

import smartHomeImage from "../assets/ads.jpeg";
import solarImage from "../assets/ads.jpeg";
import droneImage from "../assets/ads.jpeg";
import faceImage from "../assets/ads.jpeg";
import robotImage from "../assets/ads.jpeg";


// =====================================================
// KITS PAGE
// =====================================================

const KitsPage = () => {

  // =====================================================
  // STATES
  // =====================================================

  const [priceRange, setPriceRange] = useState([0, 10000]);

  const [selectedSkill, setSelectedSkill] = useState("All");

  const [selectedType, setSelectedType] = useState("All");

  const [selectedApplication, setSelectedApplication] =
    useState("All");

  const [currentHero, setCurrentHero] = useState(0);


  // =====================================================
  // HERO IMAGES
  // =====================================================

  const heroImages = [
    heroImage,
    smartHomeImage,
    solarImage,
    droneImage,
    faceImage,
    robotImage,
  ];


  // =====================================================
  // KITS DATA
  // =====================================================

  const kits = [

    {
      id: 1,
      name: "Arduino Starter Kit (Complete)",
      image: heroImage,
      rating: 4.7,
      reviews: 520,
      description:
        "Everything you need to start with Arduino.",
      price: 1299,
      category: "Featured",
      skill: "Beginner",
      type: "Complete Kit",
      application: "Hobby & Learning",
    },

    {
      id: 2,
      name: "ESP32 IoT Starter Kit",
      image: smartHomeImage,
      rating: 4.8,
      reviews: 410,
      description:
        "Build IoT projects with WiFi & Bluetooth.",
      price: 1499,
      category: "Featured",
      skill: "Intermediate",
      type: "Complete Kit",
      application: "Hobby & Learning",
    },

    {
      id: 3,
      name: "Raspberry Pi 4 Starter Kit",
      image: solarImage,
      rating: 4.7,
      reviews: 310,
      description:
        "Complete kit for Raspberry Pi projects & learning.",
      price: 3499,
      category: "Featured",
      skill: "Intermediate",
      type: "Complete Kit",
      application: "Academic Projects",
    },

    {
      id: 4,
      name: "Robotics DIY Car Kit (4WD)",
      image: robotImage,
      rating: 4.6,
      reviews: 260,
      description:
        "Build your own 4WD robotic car from scratch.",
      price: 1899,
      category: "Featured",
      skill: "Advanced",
      type: "DIY Kit (Unassembled)",
      application: "Final Year Projects",
    },

    {
      id: 5,
      name: "Electronics Components Starter Kit (Basic)",
      image: droneImage,
      rating: 4.6,
      reviews: 380,
      description:
        "1000+ components for all your basic projects.",
      price: 999,
      category: "Additional",
      skill: "Beginner",
      type: "Components",
      application: "Hobby & Learning",
    },

    {
      id: 6,
      name: "Sensor Kit (37 in 1)",
      image: faceImage,
      rating: 4.7,
      reviews: 290,
      description:
        "37 essential sensors for multiple applications.",
      price: 1249,
      category: "Additional",
      skill: "Intermediate",
      type: "Modules & Boards",
      application: "Academic Projects",
    },

    {
      id: 7,
      name: "Basic Electronics Learning Kit",
      image: heroImage,
      rating: 4.6,
      reviews: 210,
      description:
        "Perfect kit to learn basic electronics concepts.",
      price: 849,
      category: "Additional",
      skill: "Beginner",
      type: "Components",
      application: "Hobby & Learning",
    },

    {
      id: 8,
      name: "Power Supply Module Kit (DIY)",
      image: solarImage,
      rating: 4.7,
      reviews: 180,
      description:
        "Build your own variable power supply.",
      price: 1099,
      category: "Additional",
      skill: "Advanced",
      type: "DIY Kit (Unassembled)",
      application: "Industrial Use",
    },

  ];


  // =====================================================
  // FILTER KITS
  // =====================================================

  const filteredKits = kits.filter((kit) => {

    const priceMatch =
      kit.price >= priceRange[0] &&
      kit.price <= priceRange[1];

    const skillMatch =
      selectedSkill === "All" ||
      kit.skill === selectedSkill;

    const typeMatch =
      selectedType === "All" ||
      kit.type === selectedType;

    const applicationMatch =
      selectedApplication === "All" ||
      kit.application === selectedApplication;

    return (
      priceMatch &&
      skillMatch &&
      typeMatch &&
      applicationMatch
    );
  });


  // =====================================================
  // FEATURED + ADDITIONAL
  // =====================================================

  const featuredKits = filteredKits.filter(
    (kit) => kit.category === "Featured"
  );

  const additionalKits = filteredKits.filter(
    (kit) => kit.category === "Additional"
  );


  // =====================================================
  // STAR RATING
  // =====================================================

  const renderStars = (rating) => {

    const fullStars = Math.floor(rating);

    const halfStar = rating % 1 >= 0.5 ? 1 : 0;

    const emptyStars =
      5 - fullStars - halfStar;

    return (
      <span className="stars">

        {"★".repeat(fullStars)}

        {halfStar === 1 && "★"}

        {"☆".repeat(emptyStars)}

      </span>
    );
  };


  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {

    setPriceRange([0, 10000]);

    setSelectedSkill("All");

    setSelectedType("All");

    setSelectedApplication("All");
  };


  // =====================================================
  // HERO PREVIOUS
  // =====================================================

  const previousHero = () => {

    setCurrentHero((prev) =>
      prev === 0
        ? heroImages.length - 1
        : prev - 1
    );
  };


  // =====================================================
  // HERO NEXT
  // =====================================================

  const nextHero = () => {

    setCurrentHero((prev) =>
      (prev + 1) % heroImages.length
    );
  };


  // =====================================================
  // RETURN
  // =====================================================

  return (

    <div className="kits-page">


      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="kits-hero">

        <div className="hero-content">


          {/* HERO TEXT */}

          <div className="hero-text">

            <h1>
              High Quality Kits for Every Maker
            </h1>

            <p>
              Explore 100+ premium kits for Electronics,
              Embedded Systems, IoT, Robotics, and more.
              Perfect for students, hobbyists, and
              professionals.
            </p>


            <div className="hero-features">

              <span>
                ✓ High Quality Components
              </span>

              <span>
                ✓ Tested & Verified
              </span>

              <span>
                ✓ Beginner Friendly
              </span>

              <span>
                ✓ Fast Delivery
              </span>

              <span>
                ✓ Premium Quality Components
              </span>

              <span>
                ✓ 100+ Kits Available
              </span>

              <span>
                ✓ 7 Days Easy Return
              </span>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="hero-image-container">

            <img
              src={heroImages[currentHero]}
              alt="Technology Kit"
              className="hero-main-image"
            />


            {/* PREVIOUS BUTTON */}

            <button
              className="hero-prev"
              onClick={previousHero}
              aria-label="Previous image"
            >
              ‹
            </button>


            {/* NEXT BUTTON */}

            <button
              className="hero-next"
              onClick={nextHero}
              aria-label="Next image"
            >
              ›
            </button>


            {/* DOTS */}

            <div className="hero-dots">

              {heroImages.map((_, index) => (

                <button
                  key={index}
                  className={
                    currentHero === index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setCurrentHero(index)
                  }
                  aria-label={`Go to slide ${index + 1}`}
                />

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="kits-main">


        {/* =================================================
            SIDEBAR FILTERS
        ================================================= */}

        <aside className="filters-sidebar">

          <h3>
            All Kits
          </h3>


          <div className="price-display">
            ₹{priceRange[1].toLocaleString()}+
          </div>


          {/* PRICE */}

          <div className="filter-section">

            <h4>
              Price Range
            </h4>

            <div className="price-slider">

              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    0,
                    Number(e.target.value)
                  ])
                }
              />

              <div className="price-labels">

                <span>
                  ₹0
                </span>

                <span>
                  ₹{priceRange[1].toLocaleString()}
                </span>

              </div>

            </div>

          </div>


          {/* SKILL */}

          <div className="filter-section">

            <h4>
              Skill Level
            </h4>

            {[
              "All",
              "Beginner",
              "Intermediate",
              "Advanced",
            ].map((level) => (

              <label
                key={level}
                className="filter-option"
              >

                <input
                  type="radio"
                  name="skill"
                  checked={
                    selectedSkill === level
                  }
                  onChange={() =>
                    setSelectedSkill(level)
                  }
                />

                {level}

              </label>

            ))}

          </div>


          {/* TYPE */}

          <div className="filter-section">

            <h4>
              Kit Type
            </h4>

            {[
              "All",
              "Complete Kit",
              "DIY Kit (Unassembled)",
              "Modules & Boards",
              "Components",
            ].map((type) => (

              <label
                key={type}
                className="filter-option"
              >

                <input
                  type="radio"
                  name="type"
                  checked={
                    selectedType === type
                  }
                  onChange={() =>
                    setSelectedType(type)
                  }
                />

                {type}

              </label>

            ))}

          </div>


          {/* APPLICATION */}

          <div className="filter-section">

            <h4>
              Applications
            </h4>

            {[
              "All",
              "Academic Projects",
              "Final Year Projects",
              "Hobby & Learning",
              "Industrial Use",
            ].map((app) => (

              <label
                key={app}
                className="filter-option"
              >

                <input
                  type="radio"
                  name="application"
                  checked={
                    selectedApplication === app
                  }
                  onChange={() =>
                    setSelectedApplication(app)
                  }
                />

                {app}

              </label>

            ))}

          </div>


          {/* CLEAR FILTER */}

          <button
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear Filters
          </button>

        </aside>



        {/* =================================================
            KITS CONTENT
        ================================================= */}

        <div className="kits-content">


          {/* =================================================
              FEATURED KITS
          ================================================= */}

          <h2>
            Featured Kits
          </h2>


          <div className="kits-grid">

            {featuredKits.length > 0 ? (

              featuredKits.map((kit) => (

                <div
                  key={kit.id}
                  className="kit-card"
                >


                  {/* IMAGE */}

                  <div className="kit-image-container">

                    <img
                      src={kit.image}
                      alt={kit.name}
                      className="kit-image"
                    />

                  </div>


                  {/* RATING */}

                  <div className="kit-rating">

                    {renderStars(kit.rating)}

                    <span>
                      {kit.rating}
                    </span>

                    <span>
                      ({kit.reviews})
                    </span>

                  </div>


                  {/* NAME */}

                  <h3>
                    {kit.name}
                  </h3>


                  {/* DESCRIPTION */}

                  <p>
                    {kit.description}
                  </p>


                  {/* PRICE */}

                  <div className="kit-price">

                    ₹{kit.price.toLocaleString()}

                  </div>


                  {/* BUTTON */}

                  <button className="add-to-cart">

                    Add to Cart

                  </button>

                </div>

              ))

            ) : (

              <p className="no-results">
                No Featured Kits Found.
              </p>

            )}

          </div>



          {/* =================================================
              ADDITIONAL KITS
          ================================================= */}

          <h2>
            Additional Kits
          </h2>


          <div className="kits-grid">

            {additionalKits.length > 0 ? (

              additionalKits.map((kit) => (

                <div
                  key={kit.id}
                  className="kit-card"
                >


                  {/* IMAGE */}

                  <div className="kit-image-container">

                    <img
                      src={kit.image}
                      alt={kit.name}
                      className="kit-image"
                    />

                  </div>


                  {/* RATING */}

                  <div className="kit-rating">

                    {renderStars(kit.rating)}

                    <span>
                      {kit.rating}
                    </span>

                    <span>
                      ({kit.reviews})
                    </span>

                  </div>


                  {/* NAME */}

                  <h3>
                    {kit.name}
                  </h3>


                  {/* DESCRIPTION */}

                  <p>
                    {kit.description}
                  </p>


                  {/* PRICE */}

                  <div className="kit-price">

                    ₹{kit.price.toLocaleString()}

                  </div>


                  {/* BUTTON */}

                  <button className="add-to-cart">

                    Add to Cart

                  </button>

                </div>

              ))

            ) : (

              <p className="no-results">
                No Additional Kits Found.
              </p>

            )}

          </div>



          {/* VIEW ALL */}

          <button className="view-all-btn">

            View All Kits →

          </button>

        </div>

      </div>

    </div>
  );
};


export default KitsPage;