
import { Link } from "react-router-dom";
import doctor1 from "../assets/images/doctor-1.jpg";
import doctor2 from "../assets/images/doctor-2.jpg";
import doctor3 from "../assets/images/doctor-3.jpg";

const doctors = [
  {
    name: "Dr. Aanya Sharma",
    role: "Lead Dentist",
    specialty: "General & Preventive Dentistry",
    experience: "8+ years experience",
    image: doctor1,
    number: "01",
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Cosmetic Dentist",
    specialty: "Smile Design & Cosmetic Care",
    experience: "6+ years experience",
    image: doctor2,
    number: "02",
  },
  {
    name: "Dr. Priya Nair",
    role: "Restorative Dentist",
    specialty: "Restorative & Family Dentistry",
    experience: "7+ years experience",
    image: doctor3,
    number: "03",
  },
];

export default function Doctors() {
  return (
    <div className="doctors-page">
      <section className="doctors-hero">
        <div>
          <span className="eyebrow">MEET YOUR CARE TEAM</span>
          <h1>
            Good care starts
            <br />
            with <span>good people.</span>
          </h1>
          <p>
            Get to know our sample dental team and discover
            an approach built around communication, comfort,
            and personalized care.
          </p>
          <Link to="/appointment" className="button-primary">
            Request an appointment ↗
          </Link>
        </div>

        <div className="doctors-hero-note">
          <span className="doctors-note-symbol">✳</span>
          <h2>A little more listening. A lot more understanding.</h2>
          <p>
            A welcoming experience begins with a team that
            takes the time to understand your needs.
          </p>
        </div>
      </section>

      <section className="doctors-list-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE PEOPLE BEHIND YOUR SMILE</span>
            <h2>Meet our dental team.</h2>
          </div>
          <p className="doctors-section-description">
            Illustrative profiles for the SmileCraft website demo.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.number}>
              <div className="doctor-photo-wrap">
                <img
                  src={doctor.image}
                  alt={`Placeholder portrait for ${doctor.name}`}
                  className="doctor-photo"
                  loading="lazy"
                />
                <span className="doctor-number">{doctor.number}</span>
              </div>

              <div className="doctor-card-content">
                <span className="doctor-role">{doctor.role}</span>
                <h3>{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>

                <div className="doctor-card-bottom">
                  <span>{doctor.experience}</span>
                  <Link
                    to="/appointment"
                    aria-label={`Request an appointment with ${doctor.name}`}
                  >
                    ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="doctors-values">
        <div>
          <span className="eyebrow">OUR SHARED APPROACH</span>
          <h2>Care should feel personal, from the very first hello.</h2>
        </div>

        <div className="doctors-values-copy">
          <p>
            We want every patient to feel comfortable asking
            questions, exploring treatment options, and
            understanding the next steps in their care.
          </p>
          <Link to="/about" className="about-text-link">
            Discover our approach →
          </Link>
        </div>
      </section>

      <section className="doctors-cta">
        <div>
          <span className="eyebrow">LET'S GET ACQUAINTED</span>
          <h2>Your smile deserves thoughtful attention.</h2>
          <p>
            Start a conversation with SmileCraft Clinic.
          </p>
        </div>
        <Link to="/appointment" className="button-light">
          Request an appointment ↗
        </Link>
      </section>

      <p className="doctors-demo-disclaimer">
        Demo content only. Doctor names, qualifications, specialties,
        and experience are fictional placeholders. Replace them with
        verified information before publishing.
      </p>
    </div>
  );
}
