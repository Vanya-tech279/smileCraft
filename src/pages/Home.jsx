
import { Link } from "react-router-dom";
import heroImage from "../assets/images/dental-hero.jpg";
import clinicInterior from "../assets/images/clinic-interior.webp";

const faqs = [
  {
    q: "What should I expect at my first visit?",
    a: "A friendly conversation about your concerns, a gentle check-up, and a clear explanation of your options before anything is done.",
  },
  {
    q: "How do I book an appointment?",
    a: "Use the Book Appointment page to share your preferred date and time. Our team will get back to you to confirm.",
  },
  {
    q: "Do you see children and families?",
    a: "Yes. Family dentistry is part of our care, planned around the needs of each age and stage of life.",
  },
  {
    q: "Can I ask about costs before treatment?",
    a: "Of course. Your dentist will explain the options and discuss costs with you before treatment begins.",
  },
];

export default function Home() {
  return (
    <>

<section className="home-hero">
  <div className="home-hero-content">
    <span className="eyebrow">
      WELCOME TO SMILECRAFT CLINIC
    </span>

    <h1>
      A healthier smile.
      <br />
      <span>A happier you.</span>
    </h1>

    <p>
      Experience thoughtful dental care in a comfortable,
      welcoming environment. We're here to help you feel
      confident about every smile.
    </p>

    <div className="home-hero-actions">
      <Link to="/appointment" className="button-primary">
        Book an appointment <span>↗</span>
      </Link>

      <Link to="/services" className="home-hero-secondary">
        Explore our services →
      </Link>
    </div>

    <div className="home-hero-trust">
      <div>
        <strong>Patient-first</strong>
        <span>Personalized care</span>
      </div>

      <div>
        <strong>Modern approach</strong>
        <span>Comfort-focused visits</span>
      </div>
    </div>
  </div>

  <div className="home-hero-visual">
    <img
      src={clinicInterior}
      alt="Welcoming interior of SmileCraft dental clinic"
      className="home-hero-image"
    />

    <div className="home-hero-image-caption">
      <span className="home-hero-caption-icon">✳</span>
      <div>
        <strong>Your comfort comes first</strong>
        <span>A welcoming space for every smile</span>
      </div>
    </div>

    <div className="home-hero-image-label">
      SMILECRAFT CLINIC
    </div>
  </div>
</section>

{/* SERVICES OVERVIEW */}
<section className="home-services">
  <div className="home-services-heading">
    <div>
      <span className="eyebrow">OUR DENTAL SERVICES</span>
      <h2>
        Complete care for
        <br />
        <span>every kind of smile.</span>
      </h2>
    </div>

    <Link to="/services" className="home-services-view-all">
      Explore all services <span>↗</span>
    </Link>
  </div>

  <div className="home-services-grid">
    <article className="home-service-card">
      <div className="home-service-top">
        <span className="home-service-icon">✳</span>
        <span className="home-service-number">01</span>
      </div>
      <h3>General Dentistry</h3>
      <p>
        Routine checkups and preventive care designed to help
        you maintain a healthy smile.
      </p>
      <Link to="/services">Discover service <span>↗</span></Link>
    </article>

    <article className="home-service-card featured">
      <div className="home-service-top">
        <span className="home-service-icon">✧</span>
        <span className="home-service-number">02</span>
      </div>
      <h3>Cosmetic Dentistry</h3>
      <p>
        Explore personalized options for enhancing the
        appearance of your smile.
      </p>
      <Link to="/services">Discover service <span>↗</span></Link>
    </article>

    <article className="home-service-card">
      <div className="home-service-top">
        <span className="home-service-icon">◇</span>
        <span className="home-service-number">03</span>
      </div>
      <h3>Teeth Whitening</h3>
      <p>
        Learn about professional whitening options for a
        brighter-looking smile.
      </p>
      <Link to="/services">Discover service <span>↗</span></Link>
    </article>

    <article className="home-service-card">
      <div className="home-service-top">
        <span className="home-service-icon">⌘</span>
        <span className="home-service-number">04</span>
      </div>
      <h3>Dental Implants</h3>
      <p>
        Discover tooth replacement options and the process
        involved in implant treatment.
      </p>
      <Link to="/services">Discover service <span>↗</span></Link>
    </article>

    <article className="home-service-card">
      <div className="home-service-top">
        <span className="home-service-icon">⌁</span>
        <span className="home-service-number">05</span>
      </div>
      <h3>Orthodontics</h3>
      <p>
        Explore treatment options that address tooth alignment
        and bite concerns.
      </p>
      <Link to="/services">Discover service <span>↗</span></Link>
    </article>

    <article className="home-service-card">
      <div className="home-service-top">
        <span className="home-service-icon">♡</span>
        <span className="home-service-number">06</span>
      </div>
      <h3>Family Dentistry</h3>
      <p>
        Dental care options for different ages and stages
        of life.
      </p>
      <Link to="/services">Discover service <span>↗</span></Link>
    </article>
  </div>
</section>

      <section className="home-intro-strip">
        <div>
          <span className="home-strip-number">01</span>
          <div>
            <strong>Care that listens</strong>
            <p>Your questions and comfort matter.</p>
          </div>
        </div>

        <div>
          <span className="home-strip-number">02</span>
          <div>
            <strong>Clear guidance</strong>
            <p>Understand your options with confidence.</p>
          </div>
        </div>

        <div>
          <span className="home-strip-number">03</span>
          <div>
            <strong>Personal attention</strong>
            <p>A thoughtful approach to every visit.</p>
          </div>
        </div>
      </section>

      <section className="home-approach-section">
        <div className="home-approach-visual">
          <img
            src={heroImage}
            alt="Dentist carrying out a gentle check-up"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 320,
              objectFit: "cover",
              borderRadius: 24,
            }}
          />

          <div className="home-approach-badge">
            A LITTLE MORE CARE.
            <br />
            A LOT MORE COMFORT.
          </div>
        </div>

        <div className="home-approach-copy">
          <span className="eyebrow">THE SMILECRAFT APPROACH</span>

          <h2>
            Dental care that feels
            <br />
            <span>different, in a good way.</span>
          </h2>

          <p>
            We believe a positive dental experience begins
            with honest conversations, thoughtful attention,
            and a plan that takes your individual needs into
            account.
          </p>

          <Link to="/about" className="button-primary">
            Get to know us <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="home-faq">
        <div className="home-faq-heading">
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2>Questions you may <span>have.</span></h2>
        </div>
        <div className="home-faq-list">
          {faqs.map((item) => (
            <details className="home-faq-item" key={item.q}>
              <summary>
                {item.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-final-cta">
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Ready to make time for your smile?</h2>
          <p>
            Take the first step toward a more confident
            dental care experience.
          </p>
        </div>

        <div className="home-final-cta-actions">
          <Link to="/appointment" className="button-light">
            Request an appointment ↗
          </Link>

          <Link to="/contact" className="home-cta-contact">
            Have a question? Contact us
          </Link>
        </div>
      </section>

      <p className="home-demo-note">
        SmileCraft Clinic is a sample website. Services and
        clinic descriptions are illustrative demo content.
      </p>
    </>
  );
}
