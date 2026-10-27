
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Ananya R.",
    initials: "AR",
    type: "General Dentistry",
    rating: 5,
    date: "Sample review",
    text: "The clinic experience felt welcoming, and the team took time to explain each step clearly.",
    color: "lavender",
  },
  {
    name: "Rahul M.",
    initials: "RM",
    type: "Dental Consultation",
    rating: 5,
    date: "Sample review",
    text: "I appreciated the clear communication and the thoughtful approach to discussing treatment options.",
    color: "blue",
  },
  {
    name: "Priya K.",
    initials: "PK",
    type: "Family Dentistry",
    rating: 5,
    date: "Sample review",
    text: "The overall design and patient journey make this feel like a calm, approachable dental practice.",
    color: "peach",
  },
  {
    name: "Arjun S.",
    initials: "AS",
    type: "Cosmetic Consultation",
    rating: 5,
    date: "Sample review",
    text: "The consultation process was easy to understand, with clear information about the next steps.",
    color: "mint",
  },
  {
    name: "Meera P.",
    initials: "MP",
    type: "Preventive Care",
    rating: 5,
    date: "Sample review",
    text: "A clean, organized experience with a focus on helping patients understand their options.",
    color: "blue",
  },
  {
    name: "Kiran D.",
    initials: "KD",
    type: "First Visit",
    rating: 5,
    date: "Sample review",
    text: "The welcoming atmosphere and simple booking journey make a great first impression.",
    color: "lavender",
  },
];

function Stars({ count }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, index) => (
        <span key={index} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="reviews-page">
      <section className="reviews-hero">
        <div className="reviews-hero-copy">
          <span className="eyebrow">KIND WORDS & SAMPLE FEEDBACK</span>
          <h1>
            Every smile has
            <br />
            <span>a story to tell.</span>
          </h1>
          <p>
            Explore how a patient testimonial section could look
            on the SmileCraft Clinic website. These are sample
            reviews for presentation purposes only.
          </p>

          <Link to="/appointment" className="button-primary">
            Request an appointment ↗
          </Link>
        </div>

        <div className="reviews-summary-card">
          <span className="reviews-summary-symbol">✳</span>
          <span className="eyebrow">SAMPLE RATING DISPLAY</span>
          <div className="reviews-summary-rating">5.0</div>
          <Stars count={5} />
          <p>
            Illustrative rating layout
            <br />
            Not based on actual patient reviews
          </p>
          <div className="reviews-summary-bottom">
            <span>Patient-first care</span>
            <span>✦</span>
          </div>
        </div>
      </section>

      <section className="reviews-list-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PATIENT EXPERIENCES</span>
            <h2>Small moments. Meaningful care.</h2>
          </div>
          <p className="reviews-heading-description">
            Replace these examples with genuine, approved patient
            testimonials before the website goes live.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={review.initials}>
              <div className="review-card-top">
                <Stars count={review.rating} />
                <span className="review-quote-mark">“</span>
              </div>

              <p className="review-text">{review.text}</p>

              <div className="review-card-footer">
                <div className={`review-avatar ${review.color}`}>
                  {review.initials}
                </div>

                <div className="review-author">
                  <h3>{review.name}</h3>
                  <span>{review.type}</span>
                </div>

                <span className="review-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="review-demo-tag">{review.date}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-values">
        <div className="reviews-values-icon">♡</div>
        <div>
          <span className="eyebrow">WHAT MATTERS TO US</span>
          <h2>Good dentistry begins with listening.</h2>
          <p>
            Clear communication, thoughtful explanations, and
            respect for each patient's individual needs should
            be at the heart of every dental visit.
          </p>
        </div>
        <Link to="/about" className="about-text-link">
          Learn about our approach →
        </Link>
      </section>

      <section className="reviews-cta">
        <div>
          <span className="eyebrow">YOUR STORY STARTS HERE</span>
          <h2>Ready to take the next step for your smile?</h2>
          <p>
            Explore our services or request an appointment.
          </p>
        </div>

        <Link to="/appointment" className="button-light">
          Request an appointment ↗
        </Link>
      </section>

      <p className="reviews-demo-disclaimer">
        All names, ratings, and testimonials on this page are
        fictional demonstration content. They are not genuine
        patient reviews and must not be published as real feedback.
      </p>
    </div>
  );
}
