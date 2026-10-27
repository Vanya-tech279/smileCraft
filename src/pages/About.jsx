
import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Patient-first care",
    description:
      "Every treatment journey begins by listening, understanding concerns, and respecting individual needs.",
  },
  {
    number: "02",
    title: "Clarity at every step",
    description:
      "We believe patients should understand their options before making decisions about their dental care.",
  },
  {
    number: "03",
    title: "Comfort matters",
    description:
      "A welcoming environment and thoughtful communication can make dental visits feel less intimidating.",
  },
];

const steps = [
  {
    number: "01",
    title: "Let's talk",
    description:
      "Start with a conversation about your concerns, goals, and dental history.",
  },
  {
    number: "02",
    title: "Understand your options",
    description:
      "Explore appropriate treatment options and get clear answers to your questions.",
  },
  {
    number: "03",
    title: "Plan your next step",
    description:
      "Discuss a care plan that considers your needs, preferences, and circumstances.",
  },
];

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">GET TO KNOW SMILECRAFT</span>
          <h1>
            Better care.
            <br />
            <span>Brighter smiles.</span>
          </h1>
          <p>
            We believe a great dental experience starts with
            feeling comfortable, being heard, and understanding
            every step of your care.
          </p>

          <div className="about-hero-actions">
            <Link to="/appointment" className="button-primary">
              Meet us at your first visit ↗
            </Link>
            <Link to="/services" className="about-text-link">
              Explore our services →
            </Link>
          </div>

          <div className="about-hero-note">
            <span className="about-note-icon">✳</span>
            <span>Thoughtful care, designed around you.</span>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-visual-orbit orbit-one" />
          <div className="about-visual-orbit orbit-two" />

          <div className="about-smile-symbol">
            <span>☺</span>
          </div>

          <div className="about-floating-card floating-card-top">
            <span className="about-floating-icon">✳</span>
            <div>
              <strong>Care that listens</strong>
              <span>Your comfort comes first</span>
            </div>
          </div>

          <div className="about-floating-card floating-card-bottom">
            <span className="about-floating-icon">✓</span>
            <div>
              <strong>Clear communication</strong>
              <span>Confidence at every step</span>
            </div>
          </div>

          <span className="about-visual-caption">
            YOUR SMILE, OUR SHARED PRIORITY
          </span>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-label">
          <span className="eyebrow">OUR APPROACH</span>
          <h2>
            Dentistry should feel
            <br />
            <span>human first.</span>
          </h2>
        </div>

        <div className="about-intro-copy">
          <p>
            At SmileCraft, our approach begins with a simple
            idea: dental care should be built on trust. Patients
            deserve time to ask questions, understand their
            options, and feel respected throughout their visit.
          </p>
          <p>
            From routine check-ups to conversations about
            cosmetic treatments, the goal is to make every
            interaction feel clear, welcoming, and personal.
          </p>
          <Link to="/contact" className="about-text-link">
            Get to know us better →
          </Link>
        </div>
      </section>

      <section className="about-values-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2>A better experience starts here.</h2>
          </div>
          <p className="about-section-description">
            The principles behind a thoughtful and patient-focused
            dental experience.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.number}>
              <span className="about-value-number">{value.number}</span>
              <span className="about-value-symbol">✳</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-quote-section">
        <span className="about-quote-mark">“</span>
        <blockquote>
          A confident smile begins with care that makes you
          feel confident, too.
        </blockquote>
        <p>THE SMILECRAFT PHILOSOPHY</p>
      </section>

      <section className="about-process-section">
        <div className="about-process-heading">
          <span className="eyebrow">YOUR JOURNEY</span>
          <h2>Good care starts with a clear plan.</h2>
          <p>
            Here's what a typical patient journey could look
            like at the clinic.
          </p>
        </div>

        <div className="about-process-list">
          {steps.map((step) => (
            <article className="about-process-step" key={step.number}>
              <span className="about-process-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className="about-process-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span className="eyebrow">YOUR SMILE STARTS HERE</span>
          <h2>Let's make your next dental visit a better experience.</h2>
          <p>
            Have questions or want to explore your options?
            We'd be happy to help.
          </p>
        </div>

        <div className="about-cta-actions">
          <Link to="/appointment" className="button-light">
            Request an appointment ↗
          </Link>
          <Link to="/services" className="about-cta-secondary">
            Explore treatments
          </Link>
        </div>
      </section>

      <p className="about-demo-disclaimer">
        Demo website: SmileCraft's story, values, and care process
        are illustrative sample content. Customize them to reflect
        your client's actual clinic, team, and services.
      </p>
    </>
  );
}
