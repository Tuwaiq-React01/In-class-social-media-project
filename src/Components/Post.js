import React, { useState } from "react";
import Heart from "../img/heart.png";
export default function Post(props) {
  const [isPressed, setIsPressed] = useState(false);

  const heartClicked = () => {
    setIsPressed(!isPressed);
  };
  return (
    <div className="dog-card">
      <img src={props.img} className="dog" />
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <img
        src={Heart}
        className="heart"
        alt="heart"
        onClick={heartClicked}
        style={isPressed ? { opacity: 1 } : { opacity: 0.5 }}
      />
    </div>
  );
}
