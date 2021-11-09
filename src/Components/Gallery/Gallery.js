import gimg1 from "../../images/gallery/gimg1.png";
import gimg2 from "../../images/gallery/gimg2.png";
import gimg3 from "../../images/gallery/gimg3.png";
import gimg4 from "../../images/gallery/gimg4.png";
import gimg5 from "../../images/gallery/gimg5.png";
import gimg6 from "../../images/gallery/gimg6.png";
import gimg7 from "../../images/gallery/gimg7.png";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery component-container">
      <div className="text-content">
        <h1 className="section-heading">Gallery</h1>

        <p>
          We focus on ergonomics and meeting you where you work It's only a
          keystroke away.
        </p>
      </div>

      <div className="gallery-cards">
        <div className="gallery-cards-1">
          <img src={gimg1} alt="drone" />
          <img src={gimg2} alt="ipad" />
          <img src={gimg3} alt="2 women" />
          <img src={gimg4} alt="Apple screen" />
          <img src={gimg5} alt="code" />
          <img src={gimg6} alt="person typing" />
          <img src={gimg7} alt="Camera" />
        </div>
      </div>

      <button className="btn">See More</button>
    </section>
  );
};

export default Gallery;
