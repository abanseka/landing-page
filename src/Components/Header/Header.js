import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-scroll";
import logo from "../../images/Logo.png";
import screenImage1 from "../../images/header/screenImage1.png";
import screenImage2 from "../../images/header/screenImage2.png";
import screenImage3 from "../../images/header/screenImage3.png";

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isElementVisble, setisElementVisible] = useState(true);
  const links = [
    {
      label: "Home",
      to: "features",
    },
    {
      label: "Products",
      to: "gallery",
    },
    {
      label: "About",
      to: "partners",
    },
    {
      label: "Contact",
      to: "footer",
    },
  ];
  return (
    <section className="header component-container" id="header">
      <nav className="header-banner">
        <div id="logo">
          <img src={logo} alt="text:figma land" />
        </div>

        <ul className={`header-menu ${isMenuOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} smooth={true}>
                {link.label}
              </Link>
            </li>
          ))}

          <button className="mobile-login-btn btn">Login</button>
        </ul>
        <button className="login-btn btn">Login</button>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setisElementVisible(!isElementVisble);
          }}
          className="hamburger-toggle-button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className={`text-content ${classNames({ hide: !isElementVisble })}`}>
        <h1 className="page-title section-heading">
          Work at the speed
          <br /> of thought
        </h1>
        <p className="text-description">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div
        className={`btn-container ${classNames({ hide: !isElementVisble })}`}
      >
        <div className="header-btn">
          <button className="header-free-btn btn">Try For Free</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="screen">
        <div className="dark-fade-gradient"></div>
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
    </section>
  );
};

export default Header;
