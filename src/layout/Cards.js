import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img1 from "../images/img-1.png";
import img3 from "../images/img-3.png";
import img5 from "../images/img-5.png";
import img6 from "../images/img-6.png";
import img2 from "../images/img-2.png";
import img4 from "../images/img-4.png";
import { useUser } from "../users/UserContext";
import img7 from "../images/img-7.png";
function Cards() {
  const { userDetails, setUserData } = useUser();

  return (
    <div className="cards">
      <h1>Explore the Sea of Features Aboard ClearUp! ⚓"</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {userDetails ? (
              <CardItem
                src={img1}
                text="Captain of Education: Navigate Students through the Vast Ocean of Knowledge"
                label="Login"
                path="/Signin"
              />
            ) : (
              <CardItem
                src={img1}
                text="Captain of Education: Navigate Students through the Vast Ocean of Knowledge"
                label="My Profile"
                path="/Profile"
              />
            )}
            <CardItem
              src={img3}
              text="Journey to Knowledge: Discover How ClearUp Can navigate you to Academic Success"
              label="Login"
              path="/Signin"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={img6}
              text="Harbor at our Community Forum: Where Peers and Teachers Unite! Seek Answers, Lend a Hand, and Sail Together"
              label="Community Forum"
              path="/CommunityChat"
            />
            <CardItem
              src={img7}
              text="Free Subject-Based Video Explanations! Set Sail to Understanding with ClearUp's Educational Videos. "
              label="Videos"
              path="/Videos"
            />
            <CardItem
              src={img2}
              text="Smooth the Waves of Doubt: Engage in Private Chat with Our Teachers to Navigate Your Educational Queries!  "
              label="Connect"
              path="/Connect"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
