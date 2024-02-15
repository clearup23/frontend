import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          "Unlocking the doors to knowledge, one click at a time. Elevate your
          learning journey with us – where every question sparks a brighter
          future! 📚✨ #LearnGrowThrive"
        </p>
        <footer className="section-p1">
          <div className="col">
            <img
              src={logo}
              style={{ width: "170px", height: "55px", paddingBottom: "10px" }}
              alt="Logo"
            />
            <h3>Contact</h3>
            <p>
              <strong>Address:</strong> Torry Harris Business Solutions Pvt Ltd
              Global Tech village 6th Floor, Tower E Mylasandra- Pattengere
              Village RVCE, Banglore, Post Bangalore -560059
            </p>
            <p>
              <strong>Phone:</strong> +91 987654321
            </p>
            <p>
              <strong>Hours:</strong> 9:00 - 18:00, Mon - Sat
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
