import React, { useState } from "react";
import "./code.css";

const codeItems = [
  {
    id: 1,
    title: "Login & Signup Page",
    category: "Authentication",
    tech: "HTML / CSS / JS",
    price: "Free",
    type: "FREE",
    description:
      "Modern responsive login and signup page with clean UI.",
  },
  {
    id: 2,
    title: "Responsive Navbar",
    category: "UI Components",
    tech: "HTML / CSS / JS",
    price: "Free",
    type: "FREE",
    description:
      "Responsive navigation bar for modern websites.",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    category: "Dashboard",
    tech: "React / CSS",
    price: "₹99",
    type: "PAID",
    description:
      "Professional admin dashboard with cards and analytics.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Website",
    tech: "HTML / CSS / JS",
    price: "Free",
    type: "FREE",
    description:
      "Modern responsive portfolio website template.",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    category: "Full Project",
    tech: "React / Node.js",
    price: "₹299",
    type: "PAID",
    description:
      "Complete e-commerce frontend and backend project.",
  },
  {
    id: 6,
    title: "Student Dashboard",
    category: "Dashboard",
    tech: "React / CSS",
    price: "₹149",
    type: "PAID",
    description:
      "Student management dashboard with modern interface.",
  },
  {
    id: 7,
    title: "Contact Form",
    category: "UI Components",
    tech: "HTML / CSS",
    price: "Free",
    type: "FREE",
    description:
      "Clean contact form with responsive design.",
  },
  {
    id: 8,
    title: "Weather App",
    category: "Projects",
    tech: "JavaScript / API",
    price: "Free",
    type: "FREE",
    description:
      "Weather application using API integration.",
  },
];

const categories = [
  "All",
  "Authentication",
  "UI Components",
  "Dashboard",
  "Website",
  "Full Project",
  "Projects",
];

function Code() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  const filteredCode = codeItems.filter((item) => {
    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || item.category === category;

    const priceMatch =
      price === "All" ||
      (price === "Free" && item.type === "FREE") ||
      (price === "Paid" && item.type === "PAID");

    return searchMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="code-page">

      {/* HERO */}

      <section className="code-hero">

        <div className="code-hero-content">

          <span className="code-label">
            ELECTRIXA CODE
          </span>

          <h1>
            Ready to Use.
            <br />
            <span>Ready to Build.</span>
          </h1>

          <p>
            Get ready-made code, UI components and
            complete projects. Copy, customize and
            start building faster.
          </p>

          <div className="code-search">

            <input
              type="text"
              placeholder="Search for code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>
              Search
            </button>

          </div>

        </div>

        <div className="code-hero-visual">

          <div className="code-window">

            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">

              <div className="code-line">
                <i>const</i> website =
              </div>

              <div className="code-line indent">
                <i>createWebsite</i>();
              </div>

              <div className="code-line">
                website.<b>build</b>();
              </div>

              <div className="code-line">
                website.<b>deploy</b>();
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CATEGORY */}

      <section className="code-category-section">

        <div className="code-section-heading">

          <h2>
            Browse Code by Category
          </h2>

          <p>
            Find ready-made code for your next project
          </p>

        </div>

        <div className="code-category-list">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "category-active"
                  : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </section>


      {/* MAIN */}

      <section className="code-main">

        {/* FILTER */}

        <aside className="code-filter">

          <div className="filter-title">

            <h3>
              Filters
            </h3>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setPrice("All");
              }}
            >
              Reset
            </button>

          </div>


          <div className="filter-group">

            <h4>
              Price
            </h4>

            <label>
              <input
                type="radio"
                name="price"
                checked={price === "All"}
                onChange={() => setPrice("All")}
              />
              All
            </label>

            <label>
              <input
                type="radio"
                name="price"
                checked={price === "Free"}
                onChange={() => setPrice("Free")}
              />
              Free
            </label>

            <label>
              <input
                type="radio"
                name="price"
                checked={price === "Paid"}
                onChange={() => setPrice("Paid")}
              />
              Paid
            </label>

          </div>


          <div className="filter-group">

            <h4>
              Technology
            </h4>

            <label>
              <input type="checkbox" />
              HTML
            </label>

            <label>
              <input type="checkbox" />
              CSS
            </label>

            <label>
              <input type="checkbox" />
              JavaScript
            </label>

            <label>
              <input type="checkbox" />
              React
            </label>

            <label>
              <input type="checkbox" />
              Node.js
            </label>

          </div>

        </aside>


        {/* CODE PRODUCTS */}

        <div className="code-products">

          <div className="code-products-top">

            <div>

              <h2>
                Ready-Made Code
              </h2>

              <span>
                {filteredCode.length} items available
              </span>

            </div>

            <select>
              <option>
                Sort: Popular
              </option>

              <option>
                Newest
              </option>

              <option>
                Price: Low to High
              </option>

              <option>
                Price: High to Low
              </option>
            </select>

          </div>


          <div className="code-grid">

            {filteredCode.map((item) => (

              <div
                className="code-card"
                key={item.id}
              >

                {/* PREVIEW */}

                <div className="code-card-preview">

                  <span
                    className={
                      item.type === "FREE"
                        ? "free-badge"
                        : "paid-badge"
                    }
                  >
                    {item.type}
                  </span>

                  <div className="mini-browser">

                    <div className="mini-browser-top">

                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                    <div className="mini-code">

                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                  </div>

                </div>


                {/* DETAILS */}

                <div className="code-card-content">

                  <span className="code-card-category">
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="code-tech">
                    {item.tech}
                  </div>


                  <div className="code-card-bottom">

                    <strong>
                      {item.price}
                    </strong>

                    <button>
                      {item.type === "FREE"
                        ? "Get Code"
                        : "View Code"}
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="code-cta">

        <div>

          <span>
            BUILD FASTER WITH ELECTRIXA
          </span>

          <h2>
            Don't build everything
            <br />
            from scratch.
          </h2>

          <p>
            Use ready-made code, learn from it,
            customize it and build your project faster.
          </p>

          <button>
            Explore All Code →
          </button>

        </div>

        <div className="cta-code">
          &lt;/&gt;
        </div>

      </section>

    </div>
  );
}

export default Code;