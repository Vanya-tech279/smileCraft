import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

import "./styles.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Reviews from "./pages/Reviews";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

const REVEAL = [
  ".home-intro-strip > div", ".home-services-heading", ".home-service-card",
  ".home-approach-section > *", ".home-faq-heading", ".home-faq-item", ".home-final-cta",
  ".service-feature-card", ".service-small-card", ".doctor-card", ".review-card",
  ".about-value-card", ".about-process-step", ".about-intro > *", ".contact-info-item",
  ".contact-form-card", ".appointment-form-card", ".services-cta", ".doctors-cta",
  ".reviews-cta", ".about-cta", ".reviews-values", ".doctors-values",
].join(",");

function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>Oops, this page doesn't exist.</h1>
      <Link to="/" className="button-primary">Return home ↗</Link>
    </section>
  );
}

function Layout() {
  const { pathname } = useLocation();

  // Scroll to top and reveal sections as they enter the screen.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("is-visible");
          io.unobserve(el);
          setTimeout(() => el.classList.remove("reveal", "is-visible"), 1200);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    document.querySelectorAll(REVEAL).forEach((el) => {
      const group = [...el.parentElement.children].filter((c) => c.matches(REVEAL));
      el.style.setProperty("--d", `${Math.min(group.indexOf(el), 5) * 90}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main key={pathname} className="site-main page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
