import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./Style.css";
import { useUser } from "../users/UserContext";
import ChatsPage from "../src1/chatsPage";
function Navbar() {
  const { userDetails, setUserData } = useUser();
  const navigate = useNavigate();
  return (
    <section id="header1" className="navbar">
      <a>
        <img src={logo} />
      </a>
      {/* <div class="title"> CLEARUP</div> */}

      <div>
        <ul id="nav-links">
          <li className="ctn">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li className="ctn">
            <Link to="/CommunityChat">Post Questions</Link>

            {/* <a href="CommunityChat.html">Post a Question</a> */}
          </li>
          <li className="ctn">
            <Link to="/Videos">Videos</Link>
          </li>
          <li className="ctn">
            <Link to="/chat">Connect</Link>
          </li>
          {userDetails ? (
            <>
              <>
                <li className="ctn">
                  <Link to="/Profile"> My Profile </Link>
                </li>

                <li className="ctn">
                  <button
                    type="button"
                    class="btn"
                    style={{ color: "white" }}
                    onClick={() => {
                      setUserData("");
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            </>
          ) : (
            <>
              <li className="ctn">
                <Link to="/Signup">Signup</Link>
              </li>

              <li className="ctn">
                <Link to="/Signin">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
