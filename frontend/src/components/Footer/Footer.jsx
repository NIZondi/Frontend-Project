import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>Njabulo Innocent Zondi. 1st project</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+27-62-357-4682</li>
            <li>innocentzondi86@gmail.com</li>
          </ul>
        </div>
        
        
      </div>
      <hr />
      <p className="copyright" >Copyright 2024</p>
    
    </div>
  )
}

export default Footer;
