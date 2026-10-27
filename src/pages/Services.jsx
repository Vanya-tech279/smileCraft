import { Link } from "react-router-dom";

import dentalHero from "../assets/images/dental-hero.jpg";
import clinicInterior from "../assets/images/clinic-interior.webp";

const generalImage = dentalHero;
const cosmeticImage = clinicInterior;
const implantsImage = dentalHero;
const services = [
  {
    number: "01",
    category: "PREVENTIVE CARE",
    title: "General Dentistry",
    description:
      "Routine examinations, preventive guidance, and treatment planning to help maintain your oral health.",
    image: generalImage,
    duration: "Visit duration varies",
  },
  {
    number: "02",
    category: "SMILE ENHANCEMENT",
    title: "Cosmetic Dentistry",
    description:
      "Explore suitable options for improving the appearance of your smile with a personalized consultation.",
    image: cosmeticImage,
    duration: "Consultation recommended",
  },
  {
    number: "03",
    category: "RESTORATIVE CARE",
    title: "Dental Implants",
    description:
      "Learn about tooth-replacement options and the assessment needed to determine suitability.",
    image: implantsImage,
    duration: "Assessment required",
  },
];

const additionalServices = [
  {
    number: "04",
    title: "Teeth Whitening",
    description: "Discuss professional options for tooth discoloration.",
    icon: "✧",
  },
  {
    number: "05",
    title: "Orthodontics",
    description: "Explore options for improving tooth alignment.",
    icon: "⌁",
  },
  {
    number: "06",
    title: "Family Dentistry",
    description: "Dental care planning for different stages of life.",
    icon: "♡",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <span className="eyebrow">OUR DENTAL SERVICES</span>
        <h1>
          Thoughtful care for
          <br />
          <span>every kind of smile.</span>
        </h1>
        <p>
          Explore our sample treatment categories and discover
          how your dental care journey could begin with a
          conversation tailored to your needs.
        </p>

        <div className="services-hero-actions">
          <Link to="/appointment" className="button-primary">
            Request a consultation ↗
          </Link>
          <span>Personalized care starts with a conversation.</span>
        </div>

        <div className="services-hero-decoration" aria-hidden="true">
          <span>SC</span>
        </div>
      </section>

      <section className="services-featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE YOUR OPTIONS</span>
            <h2>Care designed around your needs.</h2>
          </div>
          <p className="services-heading-description">
            Treatment recommendations depend on an individual
            dental assessment.
          </p>
        </div>

        <div className="services-featured-grid">
          {services.map((service) => (
            <article className="service-feature-card" key={service.number}>
              <div className="service-feature-image-wrap">
                <img
                  src={service.image}
                  alt={`${service.title} dental care`}
                  className="service-feature-image"
                  loading="lazy"
                />
                <span className="service-feature-number">
                  {service.number}
                </span>
              </div>

              <div className="service-feature-content">
                <span className="service-category">
                  {service.category}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-duration">
                  <span>◷</span>
                  {service.duration}
                </div>

                <Link
                  to="/appointment"
                  className="service-feature-link"
                >
                  Ask about this service <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-additional">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MORE WAYS WE CAN HELP</span>
            <h2>Explore more treatments.</h2>
          </div>
        </div>

        <div className="services-additional-grid">
          {additionalServices.map((service) => (
            <article
              className="service-small-card"
              key={service.number}
            >
              <div className="service-small-top">
                <span className="service-small-icon">
                  {service.icon}
                </span>
                <span className="service-small-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link to="/appointment">
                Discuss your options <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="services-note">
        <span className="services-note-icon">i</span>
        <div>
          <h3>Not sure which treatment you need?</h3>
          <p>
            That's okay. Request a consultation to discuss your
            concerns and learn about appropriate next steps.
            Treatment suitability, duration, and cost depend on
            individual circumstances.
          </p>
        </div>
        <Link to="/contact">Contact us ↗</Link>
      </section>

      <section className="services-cta">
        <div>
          <span className="eyebrow">YOUR SMILE, YOUR JOURNEY</span>
          <h2>Let's find the right next step for you.</h2>
          <p>
            Start with a conversation about your dental care goals.
          </p>
        </div>

        <Link to="/appointment" className="button-light">
          Request an appointment ↗
        </Link>
      </section>

      <p className="services-demo-disclaimer">
        Demo content only. Treatment descriptions are illustrative
        and do not replace professional dental advice. Confirm the
        clinic's actual services before publishing.
      </p>
    </div>
  );
}
