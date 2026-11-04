import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [page, setPage] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =========================
  // LOGIN
  // =========================

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // Save login information
    localStorage.setItem("loggedInEmail", email);
    localStorage.setItem("isLoggedIn", "true");

    // Open homepage
    window.location.href = "/home";
  };


  // =========================
  // SIGN UP
  // =========================

  const handleSignup = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword =
      e.target.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem(
      "disasterReadyUser",
      JSON.stringify(user)
    );

    setMessage(
      "Account created successfully! Please login."
    );

    setTimeout(() => {
      setPage("login");
      setMessage("");
      setError("");
    }, 1500);
  };


  // =========================
  // FORGOT PASSWORD
  // =========================

  const handleForgot = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const email = e.target.email.value.trim();

    const savedUser = localStorage.getItem(
      "disasterReadyUser"
    );

    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      user.email.toLowerCase() !==
      email.toLowerCase()
    ) {
      setError("Email address not found.");
      return;
    }

    localStorage.setItem("resetEmail", email);

    setMessage("Email verified successfully.");

    setTimeout(() => {
      setPage("reset");
      setMessage("");
    }, 1000);
  };


  // =========================
  // RESET PASSWORD
  // =========================

  const handleReset = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const newPassword =
      e.target.newPassword.value;

    const confirmPassword =
      e.target.confirmPassword.value;

    if (newPassword.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const savedUser = localStorage.getItem(
      "disasterReadyUser"
    );

    if (!savedUser) {
      setError("Account not found.");
      return;
    }

    const user = JSON.parse(savedUser);

    user.password = newPassword;

    localStorage.setItem(
      "disasterReadyUser",
      JSON.stringify(user)
    );

    localStorage.removeItem("resetEmail");

    setMessage(
      "Password changed successfully!"
    );

    setTimeout(() => {
      setPage("login");
      setMessage("");
      setError("");
    }, 1500);
  };


  // ==========================================
  // LOGIN PAGE
  // ==========================================

  if (page === "login") {
    return (
      <div className="login-page">

        <div className="login-box">

          {/* LEFT SIDE */}

          <div className="login-left">

            <div className="login-overlay">

              <div className="welcome-icon">
                🛡️
              </div>

              <h2>
                Welcome Back
              </h2>

              <p>
                Please log in to access your
                DisasterReady account and stay
                prepared for emergencies.
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="login-right">

            <button
              type="button"
              className="close-login"
              onClick={() =>
                window.location.href = "/home"
              }
            >
              ×
            </button>


            <h1>
              LOGIN
            </h1>


            <form onSubmit={handleLogin}>

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                id="login-email"
                placeholder="Email"
                autoComplete="email"
                required
              />


              {/* PASSWORD */}

              <div className="password-box">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  id="login-password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="eye-button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "🙈"
                    : "👁️"}
                </button>

              </div>


              {/* OPTIONS */}

              <div className="login-options">

                <label>

                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />

                  Remember me

                </label>


                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => {
                    setPage("forgot");
                    setError("");
                    setMessage("");
                  }}
                >
                  Forgot password?
                </button>

              </div>


              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="login-button"
              >
                Log In
              </button>

            </form>


            {/* ERROR */}

            {error && (
              <p className="error-message">
                {error}
              </p>
            )}


            {/* SUCCESS */}

            {message && (
              <p className="success-message">
                {message}
              </p>
            )}


            {/* SIGN UP */}

            <p className="signup-text">

              Don't have an account?

              <button
                type="button"
                className="link-button"
                onClick={() => {
                  setPage("signup");
                  setError("");
                  setMessage("");
                }}
              >
                Sign up
              </button>

            </p>

          </div>

        </div>

      </div>
    );
  }


  // ==========================================
  // SIGNUP PAGE
  // ==========================================

  if (page === "signup") {
    return (
      <div className="login-page">

        <div className="login-box">

          <div className="login-left">

            <div className="login-overlay">

              <div className="welcome-icon">
                🛡️
              </div>

              <h2>
                Join DisasterReady
              </h2>

              <p>
                Create your account and stay
                aware, prepared and safe.
              </p>

            </div>

          </div>


          <div className="login-right">

            <h1>
              CREATE ACCOUNT
            </h1>


            <form onSubmit={handleSignup}>

              {/* NAME */}

              <input
                type="text"
                name="name"
                id="signup-name"
                placeholder="Full Name"
                autoComplete="name"
                required
              />


              {/* EMAIL */}

              <input
                type="email"
                name="email"
                id="signup-email"
                placeholder="Email"
                autoComplete="email"
                required
              />


              {/* PASSWORD */}

              <input
                type="password"
                name="password"
                id="signup-password"
                placeholder="Create Password"
                autoComplete="new-password"
                required
              />


              {/* CONFIRM PASSWORD */}

              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                placeholder="Confirm Password"
                autoComplete="new-password"
                required
              />


              <button
                type="submit"
                className="login-button"
              >
                Sign Up
              </button>

            </form>


            {error && (
              <p className="error-message">
                {error}
              </p>
            )}


            {message && (
              <p className="success-message">
                {message}
              </p>
            )}


            <p className="signup-text">

              Already have an account?

              <button
                type="button"
                className="link-button"
                onClick={() => {
                  setPage("login");
                  setError("");
                  setMessage("");
                }}
              >
                Login
              </button>

            </p>

          </div>

        </div>

      </div>
    );
  }


  // ==========================================
  // FORGOT PASSWORD
  // ==========================================

  if (page === "forgot") {
    return (
      <div className="login-page">

        <div className="login-box">

          <div className="login-left">

            <div className="login-overlay">

              <div className="welcome-icon">
                🔐
              </div>

              <h2>
                Password Recovery
              </h2>

              <p>
                Enter your registered email
                to recover your account.
              </p>

            </div>

          </div>


          <div className="login-right">

            <h1>
              FORGOT PASSWORD
            </h1>


            <p className="form-description">
              Enter your registered email
              address to continue.
            </p>


            <form onSubmit={handleForgot}>

              <input
                type="email"
                name="email"
                id="forgot-email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />


              <button
                type="submit"
                className="login-button"
              >
                Verify Email
              </button>

            </form>


            {error && (
              <p className="error-message">
                {error}
              </p>
            )}


            {message && (
              <p className="success-message">
                {message}
              </p>
            )}


            <button
              type="button"
              className="back-button"
              onClick={() => {
                setPage("login");
                setError("");
                setMessage("");
              }}
            >
              ← Back to Login
            </button>

          </div>

        </div>

      </div>
    );
  }


  // ==========================================
  // RESET PASSWORD
  // ==========================================

  if (page === "reset") {
    return (
      <div className="login-page">

        <div className="login-box">

          <div className="login-left">

            <div className="login-overlay">

              <div className="welcome-icon">
                🔑
              </div>

              <h2>
                Create New Password
              </h2>

              <p>
                Set a new password for your
                DisasterReady account.
              </p>

            </div>

          </div>


          <div className="login-right">

            <h1>
              RESET PASSWORD
            </h1>


            <form onSubmit={handleReset}>

              <input
                type="password"
                name="newPassword"
                id="new-password"
                placeholder="New Password"
                autoComplete="new-password"
                required
              />


              <input
                type="password"
                name="confirmPassword"
                id="reset-confirm-password"
                placeholder="Confirm New Password"
                autoComplete="new-password"
                required
              />


              <button
                type="submit"
                className="login-button"
              >
                Change Password
              </button>

            </form>


            {error && (
              <p className="error-message">
                {error}
              </p>
            )}


            {message && (
              <p className="success-message">
                {message}
              </p>
            )}

          </div>

        </div>

      </div>
    );
  }


  return null;
}

export default Login;