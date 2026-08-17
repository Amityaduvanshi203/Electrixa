import React, { useState } from "react";
import "./Blog.css";

import heroImage from "../assets/HERO.png";
import adsImage from "../assets/ads.jpeg";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");

  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = [
    "All Posts",
    "Electronics",
    "Embedded Systems",
    "IoT",
    "Software",
    "AI / ML",
    "Projects",
    "Career Tips",
  ];

  // =====================================================
  // BLOG POSTS
  // =====================================================

  const blogPosts = [
    {
      id: 1,
      category: "Electronics",
      date: "May 20, 2024",
      title: "Top 10 Electronics Components Every Maker Should Know",
      excerpt:
        "A beginner-friendly guide to the most essential electronic components and their uses in real-world projects.",
      readTime: "6 min read",
      views: "1.2K Views",
      image: adsImage,
    },

    {
      id: 2,
      category: "IoT",
      date: "May 18, 2024",
      title: "What Is IoT? How It Works & Real-World Applications",
      excerpt:
        "Understand the basics of IoT, how it works, and how it is transforming industries around the world.",
      readTime: "7 min read",
      views: "1.5K Views",
      image: heroImage,
    },

    {
      id: 3,
      category: "Software",
      date: "May 15, 2024",
      title: "Full Stack Developer Roadmap for Beginners in 2024",
      excerpt:
        "Step-by-step roadmap to become a full-stack developer from scratch and build successful career projects.",
      readTime: "8 min read",
      views: "2.3K Views",
      image: adsImage,
    },

    {
      id: 4,
      category: "Embedded Systems",
      date: "May 14, 2024",
      title: "Introduction to Embedded Systems: A Beginner's Guide",
      excerpt:
        "Learn what embedded systems are, their components, applications, and why they are everywhere.",
      readTime: "6 min read",
      views: "980 Views",
      image: adsImage,
    },

    {
      id: 5,
      category: "AI / ML",
      date: "May 13, 2024",
      title: "Artificial Intelligence and Machine Learning vs Deep Learning",
      excerpt:
        "Confused between AI, ML and DL? Here is a simple explanation with examples to clearly understand them.",
      readTime: "4 min read",
      views: "1.1K Views",
      image: heroImage,
    },

    {
      id: 6,
      category: "Projects",
      date: "May 11, 2024",
      title: "How to Build Your First Electronics Project",
      excerpt:
        "A complete guide for planning, building and testing your first electronics project successfully.",
      readTime: "5 min read",
      views: "850 Views",
      image: adsImage,
    },
  ];

  // =====================================================
  // POPULAR TOPICS
  // =====================================================

  const popularTopics = [
    { name: "Electronics", count: 24 },
    { name: "Embedded Systems", count: 18 },
    { name: "IoT", count: 22 },
    { name: "Software Development", count: 30 },
    { name: "AI / ML", count: 16 },
    { name: "Project Ideas", count: 20 },
    { name: "Career Tips", count: 15 },
    { name: "PCB Design", count: 12 },
  ];

  // =====================================================
  // POPULAR POSTS
  // =====================================================

  const popularPosts = [
    {
      title: "How IoT is Changing Our Daily Life",
      date: "May 19, 2024",
      image: heroImage,
    },
    {
      title: "Best Programming Languages to Learn in 2024",
      date: "May 14, 2024",
      image: adsImage,
    },
    {
      title: "Solar Power Basics: Working, Types & Applications",
      date: "May 11, 2024",
      image: adsImage,
    },
  ];

  // =====================================================
  // FILTER POSTS
  // =====================================================

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch =
      activeCategory === "All Posts" ||
      post.category === activeCategory;

    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="blog-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="blog-hero">

        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">

          <div className="blog-small-label">
            OUR BLOG
          </div>

          <h1>
            INSIGHTS. IDEAS.
            <span> INNOVATION.</span>
          </h1>

          <p>
            Stay updated with the latest trends, tutorials, tips
            and industry insights from the world of Electrical,
            Electronics, IoT, Software and more.
          </p>

          <div className="blog-search">

            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button>
              🔍
            </button>

          </div>

        </div>

      </section>


      {/* =================================================
          MAIN WHITE CONTAINER
      ================================================= */}

      <main className="blog-main">

        {/* =================================================
            CATEGORY TABS
        ================================================= */}

        <section className="blog-categories">

          <div className="category-tabs">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-tab active"
                    : "category-tab"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>

        </section>


        {/* =================================================
            BLOG LAYOUT
        ================================================= */}

        <div className="blog-layout">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <section className="blog-content">

            <div className="latest-header">

              <h2>
                LATEST ARTICLES
              </h2>

              <span>
                {filteredPosts.length} Articles
              </span>

            </div>


            <div className="articles-grid">

              {filteredPosts.length > 0 ? (

                filteredPosts.map((post) => (

                  <article
                    key={post.id}
                    className="article-card"
                  >

                    {/* IMAGE */}

                    <div className="article-image">

                      <img
                        src={post.image}
                        alt={post.title}
                      />

                      <span className="article-category">
                        {post.category}
                      </span>

                    </div>


                    {/* CONTENT */}

                    <div className="article-content">

                      <div className="article-date">
                        {post.date}
                      </div>

                      <h3>
                        {post.title}
                      </h3>

                      <p>
                        {post.excerpt}
                      </p>


                      <div className="article-meta">

                        <span>
                          ◷ {post.readTime}
                        </span>

                        <span>
                          ◉ {post.views}
                        </span>

                      </div>

                    </div>

                  </article>

                ))

              ) : (

                <div className="no-posts">
                  <h3>No articles found</h3>
                  <p>
                    Try another search or category.
                  </p>
                </div>

              )}

            </div>


            {/* PAGINATION */}

            <div className="pagination">

              <button className="page-btn active">
                1
              </button>

              <button className="page-btn">
                2
              </button>

              <button className="page-btn">
                3
              </button>

              <button className="page-btn">
                ...
              </button>

              <button className="page-btn">
                10
              </button>

              <button className="next-page">
                Next →
              </button>

            </div>

          </section>


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="blog-sidebar">


            {/* ABOUT BLOG */}

            <div className="sidebar-card about-card">

              <div className="sidebar-title">

                <span className="sidebar-icon">
                  ✉
                </span>

                <h3>
                  About Our Blog
                </h3>

              </div>

              <p>
                We share knowledge, tutorials, and insights
                to help students, hobbyists, and professionals
                stay ahead in the fast-evolving tech world.
              </p>

              <button className="sidebar-dark-btn">
                Learn More About Us →
              </button>

            </div>


            {/* POPULAR TOPICS */}

            <div className="sidebar-card">

              <h3 className="sidebar-heading">
                Popular Topics
              </h3>

              <ul className="topic-list">

                {popularTopics.map((topic) => (

                  <li key={topic.name}>

                    <span>
                      {topic.name}
                    </span>

                    <b>
                      {topic.count}
                    </b>

                  </li>

                ))}

              </ul>

              <button className="sidebar-link">
                View All Topics →
              </button>

            </div>


            {/* POPULAR POSTS */}

            <div className="sidebar-card">

              <h3 className="sidebar-heading">
                Recently Popular Posts
              </h3>

              <div className="popular-posts">

                {popularPosts.map((post, index) => (

                  <div
                    className="popular-post"
                    key={index}
                  >

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                    <div>

                      <h4>
                        {post.title}
                      </h4>

                      <span>
                        {post.date}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

              <button className="sidebar-link">
                View All Popular Posts →
              </button>

            </div>

          </aside>

        </div>

{/* =====================================================
    VIDEO SECTION
===================================================== */}

<section className="video-section">

  <div className="video-section-header">
    <div>
      <span className="video-label">WATCH & LEARN</span>
      <h2>Latest <span>Videos</span></h2>
      <p>
        Learn electronics, IoT, software, AI and practical
        technologies through our video tutorials.
      </p>
    </div>

    <button className="view-all-videos">
      View All Videos →
    </button>
  </div>


  <div className="videos-grid">

    {/* VIDEO 1 */}
    <div className="video-card">

      <div className="video-thumbnail">
        <img src={adsImage} alt="Electronics Basics" />

        <button className="video-play-btn">
          ▶
        </button>

        <span className="video-duration">
          08:32
        </span>
      </div>

      <div className="video-card-content">

        <span className="video-category">
          Electronics
        </span>

        <h3>
          Electronics Basics for Beginners
        </h3>

        <p>
          Learn the basic electronic components and
          understand how they work.
        </p>

        <div className="video-meta">
          <span>◉ 2.4K Views</span>
          <span>May 20, 2024</span>
        </div>

      </div>

    </div>


    {/* VIDEO 2 */}
    <div className="video-card">

      <div className="video-thumbnail">
        <img src={heroImage} alt="IoT Tutorial" />

        <button className="video-play-btn">
          ▶
        </button>

        <span className="video-duration">
          10:15
        </span>
      </div>

      <div className="video-card-content">

        <span className="video-category">
          IoT
        </span>

        <h3>
          What Is IoT? Complete Beginner Guide
        </h3>

        <p>
          Understand IoT architecture, devices,
          sensors and real-world applications.
        </p>

        <div className="video-meta">
          <span>◉ 3.1K Views</span>
          <span>May 18, 2024</span>
        </div>

      </div>

    </div>


    {/* VIDEO 3 */}
    <div className="video-card">

      <div className="video-thumbnail">
        <img src={adsImage} alt="Embedded Systems" />

        <button className="video-play-btn">
          ▶
        </button>

        <span className="video-duration">
          12:40
        </span>
      </div>

      <div className="video-card-content">

        <span className="video-category">
          Embedded Systems
        </span>

        <h3>
          Introduction to Embedded Systems
        </h3>

        <p>
          Learn microcontrollers, sensors and the
          fundamentals of embedded systems.
        </p>

        <div className="video-meta">
          <span>◉ 1.8K Views</span>
          <span>May 16, 2024</span>
        </div>

      </div>

    </div>


    {/* VIDEO 4 */}
    <div className="video-card">

      <div className="video-thumbnail">
        <img src={heroImage} alt="Web Development" />

        <button className="video-play-btn">
          ▶
        </button>

        <span className="video-duration">
          15:20
        </span>
      </div>

      <div className="video-card-content">

        <span className="video-category">
          Software
        </span>

        <h3>
          Full Stack Development Roadmap
        </h3>

        <p>
          Complete roadmap to learn frontend,
          backend and database development.
        </p>

        <div className="video-meta">
          <span>◉ 4.2K Views</span>
          <span>May 14, 2024</span>
        </div>

      </div>

    </div>


    {/* VIDEO 5 */}
    <div className="video-card">

      <div className="video-thumbnail">
        <img src={adsImage} alt="AI ML Tutorial" />

        <button className="video-play-btn">
          ▶
        </button>

        <span className="video-duration">
          11:45
        </span>
      </div>

      <div className="video-card-content">

        <span className="video-category">
          AI / ML
        </span>

        <h3>
          AI vs ML vs Deep Learning
        </h3>

        <p>
          Understand the difference between AI,
          Machine Learning and Deep Learning.
        </p>

        <div className="video-meta">
          <span>◉ 2.9K Views</span>
          <span>May 12, 2024</span>
        </div>

      </div>

    </div>

  </div>

</section>
        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <section className="newsletter">

          <div className="newsletter-icon">
            ✉
          </div>

          <div className="newsletter-text">

            <h3>
              Stay Updated with <span>Electrixa</span>
            </h3>

            <p>
              Subscribe to our newsletter and get the latest
              articles, tutorials and updates.
            </p>

          </div>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button>
              Subscribe
            </button>

          </div>

        </section>

      </main>

    </div>
  );
};

export default BlogPage;