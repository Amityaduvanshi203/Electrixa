import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (isLogin) {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      setMessage("Login submitted successfully.");
    } else {
      console.log("Sign Up Data:", formData);

      setMessage("Account created successfully.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
    setMessage("Google Login will be connected with backend.");
  };

  const handleForgotPassword = () => {
    setMessage("Password reset option will be connected with backend.");
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setMessage("");

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    });
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


      {/* RIGHT AUTH SECTION */}
      <section className="auth-section">

        <div className="auth-card">

          {/* TOP BRAND */}
          <div className="mobile-logo">
            ELECTRIXA
          </div>


          {/* LOGIN / SIGNUP TOGGLE */}
          <div className="auth-tabs">

            <button
              type="button"
              className={isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(true);
                setMessage("");
              }}
            >
              Login
            </button>

            <button
              type="button"
              className={!isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(false);
                setMessage("");
              }}
            >
              Sign Up
            </button>

          </div>


          {/* HEADING */}
          <div className="auth-heading">

            <h2>
              {isLogin
                ? "Welcome Back"
                : "Create Your Account"}
            </h2>

            <p>
              {isLogin
                ? "Login to continue to your Electrixa account."
                : "Join Electrixa and start building the future."}
            </p>

          </div>


          {/* STATUS MESSAGE */}
          {message && (
            <div className="auth-message">
              {message}
            </div>
          )}


          {/* FORM */}
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* FULL NAME */}
            {!isLogin && (
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
            )}


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
            {!isLogin && (
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
            )}


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
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
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
            {!isLogin && (
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
            )}


            {/* LOGIN OPTIONS */}
            {isLogin && (
              <div className="login-options">

                <label className="remember">

                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />

                  <span>
                    Remember me
                  </span>

                </label>


                <button
                  type="button"
                  className="forgot-btn"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>

              </div>
            )}


            {/* SUBMIT */}
            <button
              type="submit"
              className="auth-submit"
            >
              {isLogin
                ? "Login to Electrixa"
                : "Create Account"}
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
              onClick={handleGoogleLogin}
            >

              <span className="google-icon">
                G
              </span>

              Continue with Google

            </button>

          </form>


          {/* BOTTOM SWITCH */}
          <div className="auth-switch">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={switchMode}
            >
              {isLogin
                ? "Sign Up"
                : "Login"}
            </button>

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

export default Login;