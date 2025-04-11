import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Fab } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom"; // NEW: Added useNavigate for navigation

function Nav() {
  const location = useLocation();
  const navigate = useNavigate(); // NEW: Hook for programmatic navigation

  function handleActionClick(category) {
    navigate("/menu", { state: { category } }); // NEW: Navigates to Menu with category state
  }

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img className="flag_icon" src="/images/indian_flag.png" alt="" />{" "}
          MyGov
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            {/* NEW: Dropdown for Actions */}
            <li className="nav-item dropdown actions">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Actions
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/menu"
                    state={{
                      category: "Complaint",
                    }}
                  >
                    Complaint
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/menu"
                    state={{
                      category: "Feedback",
                    }}
                  >
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/menu"
                    state={{
                      category: "Advice",
                    }}
                  >
                    Advice
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown political-parties">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Political Parties
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/national-parties">
                    National parties
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/regional-parties">
                    Regional parties
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/opinion"} className="nav-link " aria-current="page">
                People's opinion
              </Link>
            </li>
          </ul>
          {location.pathname !== "/login" && (
            <Link className="login" to={"/login"}>
              <Fab
                className="login-btn"
                variant="extended"
                size="small"
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  boxShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2)",
                  transition:
                    "box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
                    color: "#000",
                    backgroundColor: "#FFFFFF",
                  },
                }}
              >
                login
                <LoginIcon />
              </Fab>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
