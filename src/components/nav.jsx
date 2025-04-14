import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Fab } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
    setUser(storedUser);
  }, [location.pathname]); // re-check when path changes

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate(location.pathname);
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
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

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
                {["Complaint", "Feedback", "Advice"].map((cat) => (
                  <li key={cat}>
                    <Link
                      className="dropdown-item"
                      to="/menu"
                      state={{ category: cat }}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item dropdown political-parties">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Political Parties
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/national-parties">
                    National Parties
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/regional-parties">
                    Regional Parties
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to={"/opinion"} className="nav-link">
                People's Opinion
              </Link>
            </li>
          </ul>

          {/* Login or Logout area */}
          <div style={{ marginLeft: "auto" }}>
            {user ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>
                  Welcome, <strong>{user.username}</strong>
                </span>
                <Fab
                  className="logout-btn"
                  variant="extended"
                  size="small"
                  onClick={handleLogout}
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    "&:hover": {
                      backgroundColor: "#f44336",
                      color: "white",
                    },
                  }}
                >
                  Logout
                  <LogoutIcon sx={{ ml: 1 }} />
                </Fab>
              </div>
            ) : (
              location.pathname !== "/login" && (
                <Link className="login" to={"/login"}>
                  <Fab
                    className="login-btn"
                    variant="extended"
                    size="small"
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      boxShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        color: "#000",
                        backgroundColor: "#FFFFFF",
                      },
                    }}
                  >
                    Login
                    <LoginIcon sx={{ ml: 1 }} />
                  </Fab>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
