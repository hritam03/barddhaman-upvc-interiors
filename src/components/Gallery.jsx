import balancer from "../assets/services/Balancer.jpg"
import cabinet from "../assets/services/Cabinet.jpg"
import ceiling from "../assets/services/Ceiling.jpg"
import louvers from "../assets/services/Louvers.jpg"
import kitchen from "../assets/services/ModularKitchen.jpg"
import table from "../assets/services/table.jpg"

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Our Work</h2>

      <div className="gallery-grid">
        <img src={balancer} alt="UPVC Interior Work" />
        <img src={cabinet} alt="UPVC Cabinet" />
        <img src={ceiling} alt="UPVC Ceiling" />
        <img src={louvers} alt="UPVC Louvers" />
        <img src={kitchen} alt="UPVC Kitchen" />
        <img src={table} alt="UPVC Table"/>
      </div>
    </section>
  );
}

export default Gallery;
