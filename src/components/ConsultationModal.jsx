import { useState } from "react";

function ConsultationModal({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Consultation Request:
Name: ${name}
Phone: ${phone}
Query: ${query}
    `;

    const whatsappUrl =
      "https://wa.me/919932449360?text=" +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Get Free Consultation</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Your Requirement"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        <p className="modal-note">
          We will connect with you shortly.
        </p>

        <span className="modal-close" onClick={onClose}>✕</span>
      </div>
    </div>
  );
}

export default ConsultationModal;
