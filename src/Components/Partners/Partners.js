import pl1 from "../../images/partner-logos/pl1.png";
import pl2 from "../../images/partner-logos/pl2.png";
import pl3 from "../../images/partner-logos/pl3.png";
import pl4 from "../../images/partner-logos/pl4.png";
import pl5 from "../../images/partner-logos/pl5.png";
import pl6 from "../../images/partner-logos/pl6.png";
import "./Partners.css";

const Partners = () => {
  return (
    <section className=" partners component-container" id="partners">
      <div className="text-content">
        <h1 className="section-heading">Partners</h1>
        <p className="text-description">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div>
        <div className="partner-logos">
          <img src={pl1} alt="Apple" />
          <img src={pl2} alt="Apiary" />
          <img src={pl3} alt="Android" />
          <img src={pl4} alt="Camp" />
          <img src={pl5} alt="Airbnb" />
          <img src={pl6} alt="IBM" />
        </div>
      </div>
      <button className="btn">All Partners</button>
    </section>
  );
};

export default Partners;
