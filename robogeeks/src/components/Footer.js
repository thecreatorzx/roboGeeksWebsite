import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <div className="link">
          <FaLinkedin />
          Linkedin
        </div>
        <div className="link">
          <FaFacebook />
          Facebook
        </div>
        <div className="link">
          <FaInstagram />
          Instagram
        </div>
        <div className="link">
          <FaTwitter />
          Twitter
        </div>
        <div className="link">
          <FaYoutube />
          YouTube
        </div>
      </div>
    </div>
  );
};

export default Footer;
