
import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Our Doctors", path: "/doctors" },
  { label: "Patient Reviews", path: "/reviews" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link to="/" className="navbar-brand footer-brand">
            <span className="brand-icon"><Logo id="logo-grad-footer" /></span>
            <span className="brand-copy">
              <strong>SmileCraft</strong>
              <small>DENTAL CLINIC</small>
            </span>
          </Link>

          <p className="footer-description">
            Thoughtful dental care, clear guidance, and a more
            comfortable experience for every smile.
          </p>

          <Link to="/appointment" className="footer-book-link">
            Request an appointment <span>↗</span>
          </Link>
        </div>

        <div className="footer-links-column">
          <h3>Explore</h3>
          {footerLinks.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
          <Link to="/appointment">Book Appointment</Link>
        </div>

        <div className="footer-links-column">
          <h3>Our Services</h3>
          {services.map((service) => (
            <Link key={service} to="/services">
              {service}
            </Link>
          ))}
        </div>

        <div className="footer-contact-column">
          <h3>Get in touch</h3>
          <span className="footer-contact-label">PHONE</span>
          <p>+91 98765 43210</p>

          <span className="footer-contact-label">EMAIL</span>
          <p>hello@smilecraft.example</p>

          <span className="footer-contact-label">LOCATION</span>
          <p>123 Wellness Avenue, Your City, India</p>

          <span className="footer-demo-note">
            Sample contact details for demo purposes.
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SmileCraft Clinic.</p>
        <p>Demo website · Illustrative content only</p>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
