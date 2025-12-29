import { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg";
import ConsultationModal from "./ConsultationModal";

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger staggered animation after page load
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <img src={heroImage} alt="Premium UPVC Interior Design" />

        <div className="hero-content">
          <h2 className={animate ? "animate" : ""}>
            Premium UPVC Interior Solutions
          </h2>

          <p className={animate ? "animate delay-1" : ""}>
            Modular kitchens, bedrooms, living rooms & complete interior
            solutions in Barddhaman.
          </p>

          <button
            className={`btn-primary ${animate ? "animate delay-2" : ""}`}
            onClick={() => setShowModal(true)}
          >
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <ConsultationModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Hero;
