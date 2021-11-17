import React, { useState } from "react";
import logo from "../../images/Logo.png";
import screenImage1 from "../../images/header/screenImage1.png";
import screenImage2 from "../../images/header/screenImage2.png";
import screenImage3 from "../../images/header/screenImage3.png";

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // usestate and useEffects

  return (
    <section className="header component-container">
      <nav className="header-banner">
        <div id="logo">
          <img src={logo} alt="text:figma land" />
        </div>

        <ul className={`header-menu ${isMenuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
          <button className="mobile-login-btn btn">Login</button>
        </ul>
        <button className="login-btn btn">Login</button>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="hamburger-toggle-button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className="text-content">
        <h1 className="page-title section-heading">
          Work at the speed
          <br /> of thought
        </h1>
        <p className="text-description">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div>
        <div className="header-btn">
          <button className="header-free-btn btn">Try For Free</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="screen">
        <div className="header-images">
          <div className="header-image-column-1">
            <img className="header-image" src={screenImage1} alt="Dasboard" />
          </div>
          <div className="header-image-column-2">
            <img className="header-image" src={screenImage3} alt="Chat Bot" />
            <img className="header-image" src={screenImage2} alt="Board" />
          </div>
        </div>
      </div>
      <div className="dark-fade-gradient"></div>
    </section>
  );
};

export default Header;
