import { useState } from "react";

function Veterinary() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="service-page">

      <div className="service-heading">
        <span>🐄</span>
        <div>
          <h2>Veterinary Care</h2>
          <p>
            Animal health and veterinary support
          </p>
        </div>
      </div>

      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <div className="form-group">
          <label>Farmer Name</label>
          <input
            required
            placeholder="Enter farmer name"
          />
        </div>

        <div className="form-group">
          <label>Animal Type</label>

          <select required>
            <option value="">Select animal</option>
            <option>Cow</option>
            <option>Buffalo</option>
            <option>Goat</option>
            <option>Poultry</option>
          </select>
        </div>

        <div className="form-group">
          <label>Animal Name</label>
          <input
            required
            placeholder="Enter animal name"
          />
        </div>

        <div className="form-group">
          <label>Problem</label>
          <textarea
            required
            placeholder="Describe the problem"
          ></textarea>
        </div>

        <button className="submit-button">
          Book Veterinary Service
        </button>

        {submitted && (
          <div className="success-message">
            Veterinary service request submitted
            successfully
          </div>
        )}

      </form>

    </div>
  );
}

export default Veterinary;