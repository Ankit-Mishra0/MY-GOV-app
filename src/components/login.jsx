import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const [passToggle, setPassToggle] = useState(true);
  const [signIn, toggleSignIn] = useState(true);
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginForm((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  }

  function passwordToggle(e) {
    e.preventDefault();
    setPassToggle((prev) => !prev);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = loginForm;

    const url = signIn ? "http://localhost:5000/signup" : "http://localhost:5000/login";
    const body = signIn ? { username, email, password } : { email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({ id: data.userId, email: data.email, username: data.username }));
        alert(signIn ? "Signup successful!" : "Login successful!");
        navigate("/");
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  }

  return (
    <div className="login-container">
      <div className="form-section">
        <div className="logo">MyGov</div>
        <h2>{signIn ? "Start your journey" : "Continue your journey"}</h2>
        <h1>{signIn ? "Sign Up to" : "Sign In to"}</h1>

        <form onSubmit={handleSubmit}>
          {signIn && (
            <div className="input-group">
              <label>Username</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Your Name"
                  value={loginForm.username}
                  required
                />
                <span className="icon" style={{ border: "none", backgroundColor: "white" }}>👤</span>
              </div>
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="example@email.com"
                value={loginForm.email}
                required
              />
              <span className="icon" style={{ border: "none", backgroundColor: "white" }}>&#9993;</span>
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                name="password"
                onChange={handleChange}
                value={loginForm.password}
                type={passToggle ? "password" : "text"}
                placeholder="********"
                required
              />
              <button
                style={{ border: "none", backgroundColor: "white" }}
                className="icon"
                onClick={passwordToggle}
              >
                {passToggle ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>

          <button type="submit" className="signup-btn">
            {signIn ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p>{signIn ? "or sign up with" : "or sign in with"}</p>

        <div className="social-buttons">
          <button><FacebookIcon style={{ marginRight: "10px", fontSize: "20px" }} />Facebook</button>
          <button><GoogleIcon style={{ marginRight: "10px", fontSize: "20px" }} />Google</button>
          <button><AppleIcon style={{ marginRight: "10px", fontSize: "20px" }} />Apple</button>
        </div>

        <p>
          {signIn ? (
            <>
              Have an account?{" "}
              <span style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={() => toggleSignIn(false)}>Sign in</span>
            </>
          ) : (
            <>
              New here?{" "}
              <span style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={() => toggleSignIn(true)}>Sign up</span>
            </>
          )}
        </p>
      </div>

      <div className="image-section">
        <img src="https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Login visual" />
      </div>
    </div>
  );
}

export default LoginPage;
