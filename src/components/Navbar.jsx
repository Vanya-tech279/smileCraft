import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="navbar-brand" onClick={closeMenu} aria-label="SmileCraft Clinic home">
          <span className="brand-icon"><Logo /></span>
          <span className="brand-copy">
            <strong>SmileCraft</strong>
            <small>DENTAL CLINIC</small>
          </span>
        </Link>

        <div id="mobile-navigation" className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/appointment" className="navbar-cta mobile-cta" onClick={closeMenu}>
            Book Appointment <span>↗</span>
          </Link>
        </div>

        <Link to="/appointment" className="navbar-cta desktop-cta">
          Book Appointment <span>↗</span>
        </Link>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
