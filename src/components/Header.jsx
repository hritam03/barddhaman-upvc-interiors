import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">Barddhaman UPVC Interiors</h1>

          <div
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </div>
        </nav>
      </header>

      {/* SIDEBAR MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <span
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </span>

        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
          Brochure
        </a>
      </div>

      {/* ✅ OVERLAY (ADD THIS HERE) */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
