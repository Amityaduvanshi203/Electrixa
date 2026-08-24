import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    console.log("Sign Up Data:", formData);

    setMessage("Account created successfully!");

    // Backend connect hone ke baad yahan API call karna
  };

  const handleGoogleSignup = () => {
    console.log("Google Signup clicked");
    setMessage("Google Signup will be connected with backend.");
  };

  return (
    <main className="auth-page">

      {/* LEFT BRAND SECTION */}
      <section className="auth-brand">

        <div className="brand-content">

          <div className="brand-logo">
            ELECTRIXA
          </div>

          <div className="brand-line"></div>

          <h1>
            Build.
            <br />
            Create.
            <br />
            <span>Innovate.</span>
          </h1>

          <p>
            Learn, build and innovate with hardware,
            software and emerging technologies.
          </p>

          <div className="brand-features">

            <div>
              <span>✓</span>
              Practical Learning
            </div>

            <div>
              <span>✓</span>
              Real World Projects
            </div>

            <div>
              <span>✓</span>
              Hardware & Software
            </div>

          </div>

        </div>

      </section>


      {/* RIGHT SIGNUP SECTION */}
      <section className="auth-section">

        <div className="auth-card">

          {/* MOBILE LOGO */}
          <div className="mobile-logo">
            ELECTRIXA
          </div>


          {/* AUTH TABS */}
          <div className="auth-tabs">

            <button
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              type="button"
              className="active"
            >
              Sign Up
            </button>

          </div>


          {/* HEADING */}
          <div className="auth-heading">

            <h2>
              Create Your Account
            </h2>

            <p>
              Join Electrixa and start building the future.
            </p>

          </div>


          {/* MESSAGE */}
          {message && (
            <div className="auth-message">
              {message}
            </div>
          )}


          {/* SIGNUP FORM */}
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* FULL NAME */}
            <div className="input-group">

              <label>
                Full Name
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  👤
                </span>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}
            <div className="input-group">

              <label>
                Email Address
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ✉
                </span>

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


            {/* MOBILE */}
            <div className="input-group">

              <label>
                Mobile Number
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ☎
                </span>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="input-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="input-group">

              <label>
                Confirm Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  🔐
                </span>

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>


            {/* CREATE ACCOUNT */}
            <button
              type="submit"
              className="auth-submit"
            >
              Create Account
            </button>


            {/* DIVIDER */}
            <div className="divider">

              <span></span>

              <p>OR</p>

              <span></span>

            </div>


            {/* GOOGLE */}
            <button
              type="button"
              className="google-btn"
              onClick={handleGoogleSignup}
            >

              <span className="google-icon">
                G
              </span>

              Continue with Google

            </button>

          </form>


          {/* LOGIN SWITCH */}
          <div className="auth-switch">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </div>


          {/* TERMS */}
          <p className="terms">

            By continuing, you agree to Electrixa's
            <span> Terms of Service </span>
            and
            <span> Privacy Policy</span>.

          </p>

        </div>

      </section>

    </main>
  );
};

export default Signup;