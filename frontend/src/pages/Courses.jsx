import React, { useMemo, useState } from "react";
import "./Courses.css";

import heroImage from "../assets/sh .png";

import smartHomeImage from "../assets/ads.jpeg";
import solarImage from "../assets/ads.jpeg";
import droneImage from "../assets/ads.jpeg";
import faceImage from "../assets/ads.jpeg";
import robotImage from "../assets/ads.jpeg";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedDuration, setSelectedDuration] =
    useState("All Durations");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [sortBy, setSortBy] = useState("Popular");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    {
      name: "Electrical",
      count: 24,
      icon: "⚡",
    },
    {
      name: "Electronics",
      count: 32,
      icon: "▣",
    },
    {
      name: "Embedded Systems",
      count: 26,
      icon: "▦",
    },
    {
      name: "IoT & AI",
      count: 28,
      icon: "◉",
    },
    {
      name: "Software Development",
      count: 34,
      icon: "</>",
    },
    {
      name: "Robotics",
      count: 18,
      icon: "♙",
    },
    {
      name: "PCB Design",
      count: 16,
      icon: "⌘",
    },
    {
      name: "Placement Prep",
      count: 12,
      icon: "🎓",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Electrical System Design Fundamentals",
      level: "Beginner",
      rating: 4.6,
      reviews: 230,
      price: 999,
      category: "Electrical",
      tag: "Popular",
      duration: 4,
      image: solarImage,
    },
    {
      id: 2,
      title: "Embedded Systems with Arduino",
      level: "Beginner",
      rating: 4.7,
      reviews: 312,
      price: 1299,
      category: "Embedded Systems",
      tag: "Best Seller",
      duration: 6,
      image: robotImage,
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      level: "Intermediate",
      rating: 4.8,
      reviews: 420,
      price: 2499,
      category: "Software Development",
      tag: "Popular",
      duration: 10,
      image: faceImage,
    },
    {
      id: 4,
      title: "IoT with ESP32 Masterclass",
      level: "Intermediate",
      rating: 4.7,
      reviews: 280,
      price: 1499,
      category: "IoT & AI",
      tag: "Popular",
      duration: 6,
      image: smartHomeImage,
    },
    {
      id: 5,
      title: "Robotics for Beginners",
      level: "Beginner",
      rating: 4.6,
      reviews: 190,
      price: 999,
      category: "Robotics",
      tag: "Popular",
      duration: 4,
      image: robotImage,
    },
    {
      id: 6,
      title: "PCB Design with KiCad",
      level: "Intermediate",
      rating: 4.8,
      reviews: 260,
      price: 799,
      category: "PCB Design",
      tag: "Best Seller",
      duration: 5,
      image: solarImage,
    },
    {
      id: 7,
      title: "Python Programming for Everyone",
      level: "Beginner",
      rating: 4.8,
      reviews: 540,
      price: 999,
      category: "Software Development",
      tag: "Best Seller",
      duration: 4,
      image: faceImage,
    },
    {
      id: 8,
      title: "Machine Learning with Python",
      level: "Advanced",
      rating: 4.9,
      reviews: 310,
      price: 2499,
      category: "IoT & AI",
      tag: "Best Seller",
      duration: 10,
      image: smartHomeImage,
    },
    {
      id: 9,
      title: "Android App Development with Kotlin",
      level: "Intermediate",
      rating: 4.6,
      reviews: 210,
      price: 1499,
      category: "Software Development",
      tag: "Best Seller",
      duration: 7,
      image: faceImage,
    },
    {
      id: 10,
      title: "Data Structures & Algorithms",
      level: "Advanced",
      rating: 4.8,
      reviews: 430,
      price: 1499,
      category: "Software Development",
      tag: "Best Seller",
      duration: 8,
      image: droneImage,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);

    return (
      <span className="elx-courses-stars">
        {"★".repeat(fullStars)}
        {"☆".repeat(5 - fullStars)}
      </span>
    );
  };

  const filteredCourses = useMemo(() => {
    const result = courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        course.category === activeCategory;

      const matchesLevel =
        selectedLevel === "All Levels" ||
        course.level === selectedLevel;

      let matchesDuration = true;

      if (selectedDuration === "Short (1-4 weeks)") {
        matchesDuration = course.duration <= 4;
      }

      if (selectedDuration === "Medium (4-8 weeks)") {
        matchesDuration =
          course.duration > 4 && course.duration <= 8;
      }

      if (selectedDuration === "Long (8+ weeks)") {
        matchesDuration = course.duration > 8;
      }

      let matchesPrice = true;

      if (selectedPrice === "Free") {
        matchesPrice = course.price === 0;
      }

      if (selectedPrice === "Under ₹500") {
        matchesPrice = course.price < 500;
      }

      if (selectedPrice === "₹500 - ₹1000") {
        matchesPrice =
          course.price >= 500 && course.price <= 1000;
      }

      if (selectedPrice === "₹1000+") {
        matchesPrice = course.price > 1000;
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesDuration &&
        matchesPrice
      );
    });

    return [...result].sort((a, b) => {
      if (sortBy === "Popular") {
        return b.reviews - a.reviews;
      }

      if (sortBy === "Price: Low to High") {
        return a.price - b.price;
      }

      if (sortBy === "Price: High to Low") {
        return b.price - a.price;
      }

      if (sortBy === "Rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [
    searchTerm,
    activeCategory,
    selectedLevel,
    selectedDuration,
    selectedPrice,
    sortBy,
  ]);

  return (
    <div className="elx-courses-page">
{/* ================= HERO SECTION ================= */}

<section className="elx-main-hero">

  {/* ================= LEFT CONTENT ================= */}
  <div className="elx-main-hero-content">

    <h1>
      LEARN. BUILD.
      <br />
      <span>INNOVATE.</span>
    </h1>

    <p>
      Explore industry-focused courses designed to build your skills, enhance your knowledge, and help you create real-world impact
    </p>

    {/* ================= BUTTONS ================= */}
    <div className="elx-main-hero-buttons">

      <button className="elx-hero-primary-btn">
        Explore Courses
        <span>→</span>
      </button>

      <button className="elx-hero-secondary-btn">
        Shop Kits
      </button>

    </div>


    {/* ================= FEATURES ================= */}
    <div className="elx-main-hero-features">

      <div className="elx-main-feature">
        <div className="elx-feature-icon">♙</div>

        <div>
          <strong>Expert</strong>
          <small>Instructors</small>
        </div>
      </div>


      <div className="elx-main-feature">
        <div className="elx-feature-icon">🛠</div>

        <div>
          <strong>Hands-on</strong>
          <small>Projects</small>
        </div>
      </div>


      <div className="elx-main-feature">
        <div className="elx-feature-icon">▣</div>

        <div>
          <strong>Premium</strong>
          <small>Kits</small>
        </div>
      </div>


      <div className="elx-main-feature">
        <div className="elx-feature-icon">♡</div>

        <div>
          <strong>Placement</strong>
          <small>Support</small>
        </div>
      </div>

    </div>

  </div>


  {/* ================= RIGHT IMAGE ================= */}
  <div className="elx-main-hero-visual">

    <img
      src={heroImage}
      alt="Electrixa Hardware and Software"
    />


    {/* ================= FLOATING TAGS ================= */}

    <div className="elx-floating-tag elx-tag-electrical">
      <span>ϟ</span>
      Electrical
    </div>


    <div className="elx-floating-tag elx-tag-electronics">
      <span>▣</span>
      Electronics
    </div>


    <div className="elx-floating-tag elx-tag-software">
      <span>&lt;/&gt;</span>
      Software
    </div>


    <div className="elx-floating-tag elx-tag-ai">
      <span>⌁</span>
      IoT &amp; AI
    </div>

  </div>

</section>

      {/* ================= CATEGORY SECTION ================= */}

      <section className="elx-courses-categories-section">

        <div className="elx-courses-category-title">
          <h3>BROWSE COURSES BY CATEGORY</h3>
        </div>

        <div className="elx-courses-categories-grid">

          <button
            className={`elx-courses-category-card ${
              activeCategory === "All" ? "elx-courses-active" : ""
            }`}
            onClick={() => setActiveCategory("All")}
          >
            <div className="elx-courses-category-icon elx-courses-all-icon">
              ✦
            </div>

            <span className="elx-courses-cat-name">
              All Courses
            </span>

            <span className="elx-courses-cat-count">
              {courses.length} Courses
            </span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`elx-courses-category-card ${
                activeCategory === cat.name ? "elx-courses-active" : ""
              }`}
              onClick={() =>
                setActiveCategory(cat.name)
              }
            >

              <div className="elx-courses-category-icon">
                {cat.icon}
              </div>

              <span className="elx-courses-cat-name">
                {cat.name}
              </span>

              <span className="elx-courses-cat-count">
                {cat.count} Courses
              </span>

            </button>
          ))}

        </div>

      </section>


      {/* ================= FILTER BAR ================= */}

      <section className="elx-courses-filters-section">

        <div className="elx-courses-filters-container">

          <div className="elx-courses-search-box">

            <span className="elx-courses-search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search for courses..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

          <div className="elx-courses-filter-group">

            <select
              value={selectedLevel}
              onChange={(e) =>
                setSelectedLevel(e.target.value)
              }
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <select
              value={selectedDuration}
              onChange={(e) =>
                setSelectedDuration(e.target.value)
              }
            >
              <option>All Durations</option>
              <option>Short (1-4 weeks)</option>
              <option>Medium (4-8 weeks)</option>
              <option>Long (8+ weeks)</option>
            </select>

            <select
              value={selectedPrice}
              onChange={(e) =>
                setSelectedPrice(e.target.value)
              }
            >
              <option>All Prices</option>
              <option>Free</option>
              <option>Under ₹500</option>
              <option>₹500 - ₹1000</option>
              <option>₹1000+</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
            >
              <option value="Popular">
                Sort By: Popular
              </option>

              <option value="Price: Low to High">
                Price: Low to High
              </option>

              <option value="Price: High to Low">
                Price: High to Low
              </option>

              <option value="Rating">
                Rating
              </option>
            </select>

          </div>

        </div>

      </section>


      {/* ================= COURSES ================= */}

      <section className="elx-courses-grid-section">

        <div className="elx-courses-heading">

          <div>
            <span>LEARN WITH ELECTRIXA</span>
            <h2>ALL COURSES</h2>
          </div>

          <p>
            {filteredCourses.length} Courses Found
          </p>

        </div>


        {filteredCourses.length > 0 ? (

          <div className="elx-courses-grid">

            {filteredCourses.map((course) => (

              <article
                key={course.id}
                className="elx-courses-course-card"
              >

                <div className="elx-courses-course-image">

                  <img
                    src={course.image}
                    alt={course.title}
                  />

                  {course.tag && (
                    <span className="elx-courses-course-tag">
                      {course.tag}
                    </span>
                  )}

                </div>


                <div className="elx-courses-course-content">

                  <div className="elx-courses-course-category">
                    {course.category}
                  </div>

                  <h3>
                    {course.title}
                  </h3>

                  <div className="elx-courses-course-meta">

                    <span>
                      {course.level}
                    </span>

                    <span>
                      {course.duration} Hours
                    </span>

                  </div>

                  <div className="elx-courses-course-rating">

                    {renderStars(course.rating)}

                    <strong>
                      {course.rating}
                    </strong>

                    <small>
                      ({course.reviews})
                    </small>

                  </div>

                  <div className="elx-courses-course-bottom">

                    <div className="elx-courses-course-price">
                      ₹{course.price.toLocaleString("en-IN")}
                    </div>

                    <button className="elx-courses-view-details">
                      View Details →
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="elx-courses-no-courses">

            <div className="elx-courses-no-course-icon">
              🔍
            </div>

            <h3>
              No Courses Found
            </h3>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        )}

        <button className="elx-courses-view-all-btn">
          View All Courses →
        </button>

      </section>


      {/* ================= BOTTOM FEATURES ================= */}

      <section className="elx-courses-course-benefits">

        <div className="elx-courses-benefit-card">

          <div className="elx-courses-benefit-icon">
            ◫
          </div>

          <div>
            <h4>
              Industry Relevant Curriculum
            </h4>

            <p>
              Courses designed by industry experts
              to make you job-ready.
            </p>
          </div>

        </div>


        <div className="elx-courses-benefit-card">

          <div className="elx-courses-benefit-icon">
            &lt;/&gt;
          </div>

          <div>
            <h4>
              Hands-on Projects
            </h4>

            <p>
              Work on real-world projects
              to build strong portfolios.
            </p>
          </div>

        </div>


        <div className="elx-courses-benefit-card">

          <div className="elx-courses-benefit-icon">
            ▣
          </div>

          <div>
            <h4>
              Certificate of Completion
            </h4>

            <p>
              Get certified and showcase
              your skills with confidence.
            </p>
          </div>

        </div>


        <div className="elx-courses-benefit-card">

          <div className="elx-courses-benefit-icon">
            ♧
          </div>

          <div>
            <h4>
              Lifetime Support
            </h4>

            <p>
              Get lifetime course support
              and guidance.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Courses;