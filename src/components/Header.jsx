import { useState } from "react";
import logo from "../assets/bupvc.jpg";

const servicesList = [
  "Modular Kitchen",
  "Wardrobe",
  "TV Unit",
  "Wall Paneling",
  "Office Furniture",
  "Door",
  "Furniture",
  "Partition",
  "Bed",
  "Temple",
  "Dressing Table",
  "Wall Ceiling",
  "Table",
  "Wall Art",
  "Louvers",
  "Security Cabin",
  "Portable Hut",
  "Malia",
  "UPVC / Aluminium Windows"
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setServicesOpen(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <nav className="navbar">
          <div
            className="logo"
            onClick={() => handleScroll("home")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="Barddhaman UPVC Interiors Logo" />
          </div>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </div>
        </nav>
      </header>

      {/* DROPDOWN MENU */}
      <div className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleScroll("home")}>Home</button>

        {/* SERVICES ACCORDION */}
        <div className="services-accordion">
          <div
            className="services-header"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <span>Services</span>
            <span className={`arrow ${servicesOpen ? "rotate" : ""}`}>⌄</span>
          </div>

          <div className={`services-body ${servicesOpen ? "open" : ""}`}>
            {servicesList.map((service, index) => (
              <div key={index} className="service-item">
                {service}
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => handleScroll("gallery")}>Gallery</button>
        <button onClick={() => handleScroll("about")}>About</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>

        <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
          Brochure
        </a>
      </div>

      {/* LIGHT OVERLAY */}
      {menuOpen && (
        <div
          className="light-overlay"
          onClick={() => {
            setMenuOpen(false);
            setServicesOpen(false);
          }}
        />
      )}
    </>
  );
}

export default Header;
