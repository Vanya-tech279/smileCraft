
import { useState } from "react";
import { Link } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  subject: "General enquiry",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  if (submitted) {
    return (
      <section className="contact-success">
        <div className="contact-success-icon">✓</div>
        <span className="eyebrow">DEMO MESSAGE COMPLETE</span>
        <h1>Thanks for getting in touch.</h1>
        <p>
          Your sample message was submitted in this demo interface.
          No email was sent and no information was saved to a server.
        </p>
        <button
          className="button-primary"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
        <Link to="/" className="about-text-link">
          Return to homepage →
        </Link>
      </section>
    );
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h1>
          Let's start a
          <br />
          <span>conversation.</span>
        </h1>
        <p>
          Have a question about our services or your first visit?
          Send us a message using this sample contact experience.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <div className="contact-details-heading">
            <span className="eyebrow">CONTACT INFORMATION</span>
            <h2>We'd love to hear from you.</h2>
            <p>
              Reach out with questions, appointment enquiries,
              or anything you'd like to know about the clinic.
            </p>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">⌖</span>
            <div>
              <h3>Visit our clinic</h3>
              <p>123 Smile Avenue, Your City</p>
              <span>Replace with your client's real address.</span>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">↗</span>
            <div>
              <h3>Call us</h3>
              <p>+91 98765 43210</p>
              <span>Demo phone number — not a real contact.</span>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">✉</span>
            <div>
              <h3>Email us</h3>
              <p>hello@example.com</p>
              <span>Replace with the clinic's verified email.</span>
            </div>
          </div>

          <div className="contact-hours">
            <h3>Sample clinic hours</h3>
            <div>
              <span>Monday – Friday</span>
              <span>9:00 AM – 6:00 PM</span>
            </div>
            <div>
              <span>Saturday</span>
              <span>9:00 AM – 2:00 PM</span>
            </div>
            <div>
              <span>Sunday</span>
              <span>Closed</span>
            </div>
            <p>Illustrative hours. Confirm before publishing.</p>
          </div>
        </div>

        <div className="contact-form-card">
          <span className="eyebrow">SEND US A MESSAGE</span>
          <h2>How can we help?</h2>
          <p className="contact-form-intro">
            Complete the form below and we'll show a sample
            submission confirmation.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="contact-field">
              Your name *
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="contact-field">
              Email address *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="contact-field">
              What is this about?
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
              >
                <option>General enquiry</option>
                <option>Dental services</option>
                <option>Appointment enquiry</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </label>

            <label className="contact-field">
              Your message *
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
              />
            </label>

            <p className="contact-form-note">
              Demo only. Do not enter sensitive medical or personal
              information. This form does not send messages.
            </p>

            <button
              type="submit"
              className="button-primary contact-submit"
            >
              Send message <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      <section className="contact-map">
        {/* Replace q=... with the clinic's real address when a client signs up */}
        <iframe
          title="Clinic location map"
          src="https://www.google.com/maps?q=Dental+Clinic+India&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, borderRadius: 24 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      <section className="contact-bottom-cta">
        <div>
          <span className="eyebrow">READY FOR YOUR NEXT STEP?</span>
          <h2>Let's make your first visit feel simple.</h2>
          <p>
            Request an appointment using our sample booking page.
          </p>
        </div>

        <Link to="/appointment" className="button-light">
          Request an appointment ↗
        </Link>
      </section>

      <p className="contact-demo-disclaimer">
        SmileCraft Clinic is a demonstration website. Contact
        details and operating hours are placeholders and must be
        replaced with verified clinic information.
      </p>
    </div>
  );
}
