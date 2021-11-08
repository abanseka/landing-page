import featureImage1 from "../../images/feature/featureImage1.png";
import featureImage2 from "../../images/feature/featureImage2.png";
import featureicon1 from "../../images/feature/featureIcon1.png";
import featureicon2 from "../../images/feature/featureIcon2.png";
import featureicon3 from "../../images/feature/featureIcon3.png";
import "./Features.css";

const Features = () => {
  return (
    <section className="features component-container">
      <div className="text-content">
        <h1 className="section-heading">Features</h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="features-content-frame">
        <div className="featImg-container">
          <img className="featImg1" src={featureImage1} alt="Chatbot" />
          <img className="featImg2" src={featureImage2} alt="Line Chart" />
        </div>

        <div className="content-row">
          <div className="content-block">
            <div className="content-heading">
              <img src={featureicon1} alt="cutlery icon" />
              <h3 className="feature-block-heading section-sub-heading">
                A single source of truth
              </h3>
            </div>
            <p className="feature-block-text">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="content-block">
            <div className="content-heading">
              <img src={featureicon2} alt="alien icon" />
              <h3 className="feature-block-heading section-sub-heading">
                Intuitive interface
              </h3>
            </div>
            <p className="feature-block-text">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="content-block">
            <div className="content-heading">
              <img src={featureicon3} alt="infinity icon" />
              <h3 className="feature-block-heading section-sub-heading">
                Or with rules
              </h3>
            </div>
            <p className="feature-block-text">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
