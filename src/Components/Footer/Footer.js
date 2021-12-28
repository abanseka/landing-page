import * as scroll from "react-scroll";
import marker from "../../images/marker.png";
import phone from "../../images/phone.png";
import "./Footer.css";

import Fb from "../../images/Fb.png";
import Tw from "../../images/Tw.png";
import In from "../../images/In.png";

const Footer = () => {
  return (
    <section className="footer component-container" id="footer">
      <div className="footer-content">
        <div className="column-content">
          <div className="footer-menu">
            <h3 className="footer-link-heading section-sub-heading">
              Fingertipe
            </h3>
            <p className="text-description footer-link-text">
              <scroll.Link to="features" smooth={true}>
                Home
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="gallery" smooth={true}>
                Products
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="partners" smooth={true}>
                About
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="header" smooth={true}>
                Contact
              </scroll.Link>
            </p>
          </div>
          <div className="footer-menu">
            <h3 className="footer-link-heading section-sub-heading">
              Resources
            </h3>
            <p className="text-description footer-link-text">
              <scroll.Link to="features" smooth={true}>
                Home
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="gallery" smooth={true}>
                Products
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="partners" smooth={true}>
                About
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="header" smooth={true}>
                Contact
              </scroll.Link>
            </p>
          </div>

          <div className="footer-menu">
            <h3 className="footer-link-heading section-sub-heading">About</h3>
            <p className="text-description footer-link-text">
              <scroll.Link to="features" smooth={true}>
                Home
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="gallery" smooth={true}>
                Products
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="partners" smooth={true}>
                About
              </scroll.Link>
            </p>
            <p className="text-description footer-link-text">
              <scroll.Link to="header" smooth={true}>
                Contact
              </scroll.Link>
            </p>
          </div>
        </div>

        <div className="content-row">
          <div className="content-block">
            <div className="content-heading">
              <img src={marker} alt="place-marker icon" />
              <p className="text-description footer-address">
                480 Mockingbird Hill
              </p>
            </div>
          </div>

          <div className="content-block">
            <div className="content-heading">
              <img className="phone-icon" src={phone} alt="phone icon" />
              <p className="text-description footer-contact">(239) 555-0108 </p>
            </div>
          </div>

          <div className="content-block">
            <div className="social-media-icons">
              <img src={Tw} alt="Twitter icon" />
              <img src={Fb} alt="Facebook icon" />
              <img src={In} alt="LinkedIn icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
