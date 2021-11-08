import contentImage1 from "../../images/content/contentImage1.png";
import contentImage2 from "../../images/content/contentImage2.png";
import "./Contents.css";

const Contents = () => {
  return (
    <section className=" contents component-container">
      <div className="text-content">
        <h1 className="section-heading">Contents</h1>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="contents-cards">
        <div className="work-card card">
          <div className="card-heading">
            <h3 className="contents-heading section-sub-heading">Work</h3>
            <p className="contents-card-text">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
          </div>
          <button className="contents-button btn">Sign Up</button>
          <img
            className="contents-image"
            src={contentImage1}
            alt="Screen Mask"
          />
        </div>
        <br />
        <div className="design-card card">
          <div className="card-heading">
            <h3 className="contents-heading section-sub-heading">
              Design with real data
            </h3>
            <p className="contents-card-text">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
          </div>
          <button className="contents-button btn">Try For Free</button>

          <img
            className="contents-image"
            src={contentImage2}
            alt="Boards Notifications"
          />
        </div>
      </div>
    </section>
  );
};

export default Contents;
