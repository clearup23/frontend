import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";
import { useUser } from "../users/UserContext";
import ChatsPage from "../src1/chatsPage";

function Navbar() {
  const { userDetails, setUserData } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData("");
    navigate("/Signin");
  };

  return (
    <section id="header1" className="navbar">
      <a>
        <img src={logo} alt="Logo" />
      </a>

      <div>
        <ul id="nav-links">
          <h3>Admin Dashboard</h3>

          <li className="ctn">
            <button
              type="button"
              className="btn"
              style={{ color: "white" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
