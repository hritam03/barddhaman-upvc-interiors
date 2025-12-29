import { useState } from "react";
import heroImage from "../assets/hero.jpg";
import ConsultationModal from "./ConsultationModal";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HERO SECTION (UNCHANGED VISUALLY) */}
      <section className="hero">
        <img src={heroImage} alt="Modern UPVC Interior Design" />

        <div className="hero-content">
          <h2>Premium UPVC Interior Solutions</h2>
          <p>
            Modular kitchens, bedrooms, living rooms & complete interior
            solutions in Barddhaman.
          </p>

          {/* BUTTON instead of anchor */}
          <button
            className="btn-primary"
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
