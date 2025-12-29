import gallery1 from "../assets/gallery1.jpg";
import kitchen from "../assets/kitchen.jpg"
import livingroom from "../assets/livingroom.jpg";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Our Work</h2>

      <div className="gallery-grid">
        <img src={gallery1} alt="UPVC Interior Work" />
        <img src={kitchen} alt="UPVC"/>
        <img src={livingroom} alt="UPVC Living Room"/>
      </div>
    </section>
  );
}

export default Gallery;
