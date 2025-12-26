import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Modern UPVC Interior Design" />

      <div className="hero-content">
        <h2>Premium UPVC Interior Solutions</h2>
        <p>
          Modular kitchens, bedrooms, living rooms & complete interior
          solutions in Barddhaman.
        </p>

        <a href="#contact" className="btn-primary">
          Get Free Consultation
        </a>
      </div>
    </section>
  );
}

export default Hero;
