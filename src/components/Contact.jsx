import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>We will contact you shortly, {name && <strong>{name}</strong>}.</p>
    </section>
  );
}

export default Contact;
