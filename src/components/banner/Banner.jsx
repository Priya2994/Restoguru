import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="bgimg"></div>
      <div className="banner-text">
        <h2 className="maintext">
          <span className="yellow">Recipe</span> Contest
        </h2>
        <h6 className="subtext">
          Recipe contests are like our big, constantly{" "}
        </h6>
        <h6 className="subtext">in-progress dinner party-and you're invited</h6>
      </div>
    </div>
  );
}

export default Banner;
