import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page">

      <section className="page-header">
        <p>GET IN TOUCH</p>
        <h1>Contact PashuCare</h1>
        <span>
          Village farming support
        </span>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <h2>Village Support Center</h2>

          <p>
            Contact us for farming and livestock
            related support.
          </p>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Dharmapuri, Tamil Nadu</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>support@pashucare.com</p>
            </div>
          </div>

        </div>

        <form
          className="form-card"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Name</label>
            <input required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Your email"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              required
              placeholder="Your phone"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              required
              placeholder="Your message"
            ></textarea>
          </div>

          <button className="submit-button">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              Message sent successfully
            </div>
          )}

        </form>

      </section>

    </main>
  );
}

export default Contact;