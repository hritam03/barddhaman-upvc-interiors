import { useEffect, useRef } from "react";

import budget from "../assets/features/budgetprooof.jpg";
import termite from "../assets/features/termite-proof.jpg";
import recycle from "../assets/features/reclyclable.jpg";
import install from "../assets/features/easytoinstall.jpg";
import fire from "../assets/features/fireretardant.jpg";
import eco from "../assets/features/ecofriendly.jpg";
import moisture from "../assets/features/moistureproof.jpg";
import water from "../assets/features/waterproof.jpg";

const features = [
  { icon: budget, label: "Budget Friendly" },
  { icon: termite, label: "Termite Proof" },
  { icon: recycle, label: "Recyclable" },
  { icon: install, label: "Easy to Install" },
  { icon: fire, label: "Fire Retardant" },
  { icon: eco, label: "Eco Friendly" },
  { icon: moisture, label: "Moisture Proof" },
  { icon: water, label: "Water Proof" },
];

function KeyFeatures() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const indexRef = useRef(0);

  const cardWidth = 190; // card width + gap
  const steps = [3, 3, 2];

  const startAutoScroll = () => {
    let stepIndex = 0;

    intervalRef.current = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      indexRef.current += steps[stepIndex];

      if (indexRef.current >= features.length) {
        indexRef.current = 0;
        stepIndex = 0;

        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      container.scrollTo({
        left: indexRef.current * cardWidth,
        behavior: "smooth",
      });

      stepIndex = (stepIndex + 1) % steps.length;
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  return (
    <section className="key-features">
      <h2>Key Features & Benefits</h2>

      <div
        className="features-grid"
        ref={containerRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.label} />
            <p>{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyFeatures;
