import kitchen from "../assets/kitchen.jpg";
import bedroom from "../assets/bedroom.jpg";
import livingroom from "../assets/livingroom.jpg";

function Services() {
  const services = [
    { title: "Modular Kitchen", img: kitchen },
    { title: "Bedroom Interiors", img: bedroom },
    { title: "Living Room Designs", img: livingroom }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
