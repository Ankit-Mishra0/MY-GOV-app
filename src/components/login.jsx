import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function LoginPage() {
  const [passToggle, setPassToggle] = useState(true);
  const [signIn, toggleSingnIn] = useState(true);
  function singInToggle(event) {
    event.preventDefault();
    toggleSingnIn((prev) => !prev);
  }
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginForm((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }
  function passwordToggle(event) {
    event.preventDefault();
    setPassToggle((prev) => !prev);
  }

  return (
    <div className="login-container">
      <div className="form-section">
        <div className="logo">MyGov</div>
        <h2>{signIn ? "Start your journey" : "continue your journey"}</h2>
        <h1>{signIn ? "Sign Up to" : "Sign In to"} </h1>
        <form>
          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="example@email.com"
                value={loginForm.email}
              />
              <span
                className="icon"
                style={{ border: "none", backgroundColor: "white" }}
              >
                &#9993;
              </span>
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
          <button>
            <FacebookIcon
              style={{ margin: "0 10px 3px 0", fontSize: "20px" }}
            />
            Facebook
          </button>
          <button>
            <GoogleIcon style={{ margin: "0 10px 3px 0", fontSize: "20px" }} />
            Google
          </button>
          <button>
            <AppleIcon style={{ margin: "0 10px 3px 0", fontSize: "20px" }} />
            Apple
          </button>
        </div>
        <p>
          {signIn ? (
            <>
              Have an account?{" "}
              <a
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={singInToggle}
              >
                Sign in
              </a>
            </>
          ) : (
            <>
              Create an account?{" "}
              <a
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={singInToggle}
              >
                Sign up
              </a>
            </>
          )}
        </p>
      </div>
      <div className="image-section">
        <img src="https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" />
      </div>
    </div>
  );
}

export default LoginPage;
