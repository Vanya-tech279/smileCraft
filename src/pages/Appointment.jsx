
import { useState } from "react";
import { Link } from "react-router-dom";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  patientType: "new",
  message: "",
};

export default function Appointment() {
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

  const today = new Date().toLocaleDateString("en-CA");

  if (submitted) {
    return (
      <section className="appointment-success">
        <div className="appointment-success-icon">✓</div>
        <span className="eyebrow">DEMO REQUEST COMPLETE</span>
        <h1>Thank you for reaching out.</h1>
        <p>
          Your sample appointment request has been recorded
          in this page's temporary interface state. No email
          or real booking has been sent.
        </p>
        <div className="appointment-success-actions">
          <button
            className="button-primary"
            onClick={() => setSubmitted(false)}
          >
            Submit another request
          </button>
          <Link to="/" className="about-text-link">
            Return home →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="appointment-page">
      <section className="appointment-hero">
        <span className="eyebrow">LET'S PLAN YOUR VISIT</span>
        <h1>
          Your smile deserves
          <br />
          <span>a little time.</span>
        </h1>
        <p>
          Tell us a little about yourself and your preferred
          appointment. This sample form demonstrates the
          booking experience for SmileCraft Clinic.
        </p>
      </section>

      <div className="appointment-layout">
        <section className="appointment-form-card">
          <div className="appointment-form-heading">
            <div>
              <span className="eyebrow">APPOINTMENT REQUEST</span>
              <h2>Let's get you started.</h2>
            </div>
            <span className="appointment-step">01 / 01</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="appointment-form-section">
              <h3>Personal information</h3>

              <div className="appointment-fields-grid">
                <label className="appointment-field">
                  Full name *
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="appointment-field">
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

                <label className="appointment-field">
                  Phone number *
                  <input
                    type="tel"
                    inputMode="tel"
                    pattern="[0-9+\- ]{10,15}"
                    title="Enter a valid phone number (10 to 15 digits)"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </label>

                <label className="appointment-field">
                  Patient type
                  <select
                    name="patientType"
                    value={form.patientType}
                    onChange={handleChange}
                  >
                    <option value="new">New patient</option>
                    <option value="returning">Returning patient</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="appointment-form-section">
              <h3>Appointment preferences</h3>

              <div className="appointment-fields-grid">
                <label className="appointment-field">
                  Service of interest *
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a service</option>
                    <option value="General Dentistry">
                      General Dentistry
                    </option>
                    <option value="Cosmetic Dentistry">
                      Cosmetic Dentistry
                    </option>
                    <option value="Teeth Whitening">
                      Teeth Whitening
                    </option>
                    <option value="Dental Implants">
                      Dental Implants
                    </option>
                    <option value="Orthodontics">Orthodontics</option>
                    <option value="Family Dentistry">
                      Family Dentistry
                    </option>
                    <option value="Other">Other / Not sure</option>
                  </select>
                </label>

                <label className="appointment-field">
                  Preferred date *
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    required
                  />
                </label>

                <label className="appointment-field">
                  Preferred time *
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </label>
              </div>

              <label className="appointment-field appointment-message-field">
                Anything you'd like us to know?
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share your questions or preferences (optional)"
                  rows="4"
                />
              </label>
            </div>

            <p className="appointment-privacy-note">
              Demo only: avoid entering sensitive medical
              information. This form does not send or store
              your information on a server.
            </p>

            <button
              type="submit"
              className="button-primary appointment-submit"
            >
              Submit appointment request <span>↗</span>
            </button>
          </form>
        </section>

        <aside className="appointment-sidebar">
          <div className="appointment-sidebar-card">
            <span className="appointment-sidebar-symbol">✳</span>
            <span className="eyebrow">YOUR FIRST STEP</span>
            <h2>A more comfortable dental experience starts here.</h2>
            <p>
              Let us know what works for you. Your selected
              date and time are preferences, not a confirmed
              appointment.
            </p>
          </div>

          <div className="appointment-info-card">
            <h3>What happens next?</h3>

            <div className="appointment-info-step">
              <span>01</span>
              <p>Share your contact details and preferences.</p>
            </div>

            <div className="appointment-info-step">
              <span>02</span>
              <p>The clinic would review your request.</p>
            </div>

            <div className="appointment-info-step">
              <span>03</span>
              <p>Your visit would be confirmed separately.</p>
            </div>
          </div>

          <div className="appointment-help-card">
            <span>Have a question?</span>
            <Link to="/contact">Contact SmileCraft ↗</Link>
          </div>
        </aside>
      </div>

      <p className="appointment-demo-disclaimer">
        SmileCraft Clinic is a demo website. Submitting this
        form does not create a real appointment.
      </p>
    </div>
  );
}
