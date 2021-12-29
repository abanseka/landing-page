import { Link } from "react-scroll";
import marker from "../../images/marker.png";
import phone from "../../images/phone.png";
import "./Footer.css";

import Fb from "../../images/Fb.png";
import Tw from "../../images/Tw.png";
import In from "../../images/In.png";

const Footer = () => {
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
      to: "header",
    },
  ];

  return (
    <section className="footer component-container" id="footer">
      <div className="footer-content">
        <div className="column-content">
          <div className="footer-menu">
            <h3 className="footer-link-heading section-sub-heading">
              Fingertipe
            </h3>
            {links.map((link, index) => (
              <p className="text-description footer-link-text" key={index}>
                <Link to={link.to} smooth={true}>
                  {link.label}
                </Link>
              </p>
            ))}
          </div>

          <div className="footer-menu">
            <h3 className="footer-link-heading section-sub-heading">
              Resources
            </h3>
            {links.map((link, index) => (
              <p className="text-description footer-link-text" key={index}>
                <Link to={link.to} smooth={true}>
                  {link.label}
                </Link>
              </p>
            ))}
          </div>

          <div className="footer-menu">
            <h3 className="footer-link-heading section-sub-heading">About</h3>
            {links.map((link, index) => (
              <p className="text-description footer-link-text" key={index}>
                <Link to={link.to} smooth={true}>
                  {link.label}
                </Link>
              </p>
            ))}
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
