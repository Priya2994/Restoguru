import React from "react";
import "./Header.css";
// styles

const logoStyle = {
  fontSize: "1.6rem",
  color: "rgb(41, 80, 109)",
};
const liStyle = {
  padding: "0 20px",
  fontSize: "20px",
};
function Header() {
  return (
    <div className="headerStyle">
      <div className="headerTop">
        <p style={logoStyle}>Restoguru</p>
        <ul className="headerMenu">
          <li className="liStyle">Home</li>
          <li className="liStyle">Cooking Class</li>
          <li className="liStyle">About</li>
          <li className="liStyle">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
