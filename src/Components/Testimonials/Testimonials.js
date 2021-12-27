import testimonialImage1 from "../../images/testimonial/testimonialImage1.png";
import testimonialImage2 from "../../images/testimonial/testimonialImage2.png";
import testimonialImage3 from "../../images/testimonial/testimonialImage3.png";
import testimonialImage4 from "../../images/testimonial/testimonialImage4.png";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonial component-container">
      <div className="text-content">
        <h1 className="section-heading">Testimonials</h1>
      </div>
      <div>
        <div className="testimonial-cards">
          <div className="card">
            <div className="profile">
              <img src={testimonialImage1} alt="man" />
              <div className="profile-detail">
                <p>Claire Bell</p>
                <p>Designer</p>
              </div>
            </div>
            <p className="text-description testimony">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.Slate helps you see how
              many more days you need to work to reach your financial goal for
              the month and year.
            </p>
          </div>

          <div className="card">
            <div className="profile">
              <img src={testimonialImage2} alt="man" />
              <div className="profile-detail">
                <p>Francisco Lane</p>
                <p>Designer</p>
              </div>
            </div>

            <p className="text-description testimony">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.Slate helps you see how
              many more days you need to work to reach your financial goal for
              the month and year.
            </p>
          </div>

          <div className="card">
            <div className="profile">
              <img src={testimonialImage3} alt="man" />
              <div className="profile-detail">
                <p>Ralph Fisher</p>
                <p>Designer</p>
              </div>
            </div>

            <p className="text-description testimony">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.Slate helps you see how
              many more days you need to work to reach your financial goal for
              the month and year.
            </p>
          </div>

          <div className="card">
            <div className="profile">
              <img src={testimonialImage4} alt="man" />
              <div className="profile-detail">
                <p>Jorge Murphy</p>
                <p>Designer</p>
              </div>
            </div>

            <p className="text-description testimony">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.Slate helps you see how
              many more days you need to work to reach your financial goal for
              the month and year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
