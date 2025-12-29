import { useState } from "react";
import logo from "../assets/bupvc.jpg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <nav className="navbar">
          <div className="logo" onClick={() => handleScroll("home")} style={{cursor: "pointer"}}>
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
        <button onClick={() => handleScroll("services")}>Services</button>
        <button onClick={() => handleScroll("gallery")}>Gallery</button>
        <button onClick={() => handleScroll("about")}>About</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>

        <a
          href="/brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brochure
        </a>
      </div>

      {/* LIGHT OVERLAY */}
      {menuOpen && (
        <div
          className="light-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
