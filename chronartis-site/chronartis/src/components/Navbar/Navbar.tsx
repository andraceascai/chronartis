import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Acasă", path: "/" },
  { label: "Arhivă", path: "/archive" },
  { label: "Evenimente", path: "/upcoming" },
  { label: "Donează", path: "/donate" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <NavLink to="/" className="nav__logo">
          <div className="nav__logo-img-wrap">
            <img src="/logo.png" alt="Chronartis" className="nav__logo-img" />
          </div>
          <div className="nav__logo-labels">
            <span className="nav__logo-text">Chronartis</span>
          </div>
        </NavLink>

        <nav
          className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""} ${path === "/donate" ? "nav__link--cta" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
