import React from "react";
import "./Header.css";
const Header = ({ toggleScroll }) => {
  return (
    <div className="header">
      <div className="nav-logo"></div>
      <div className="links">
        <div className="home">HOME</div>
        <div className="upload" onClick={() => toggleScroll()}>
          UPLOAD
        </div>
        <div className="contact">CONTACT</div>
        <div className="about">ABOUT</div>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Header;
