import cta from "../../images/cta.png";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="call-to-action component-container">
      <div className="call-to-action-content">
        <div className="call-to-action-text">
          <h1 className="call-to-action-heading section-heading">
            OpenType feature and Variable fonts
          </h1>
          <button className="call-to-action-button btn">Try For Free</button>
        </div>

        <div className="media">
          <img className="call-to-action-image" src={cta} alt="screenshot" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
