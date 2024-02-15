import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import header from "../images/header.png";
function HeroSection() {
  return (
    <div className="hero-container">
      <image src={header} />
      <h1>"Empower Your Mind: Explore Limitless Learning with ClearUp!"</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Set Sail on!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          ClearUp Your Path to Brilliance: Where Knowledge Sets Sail and Success
          Awaits on the Horizon! 🗺️🌟
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
