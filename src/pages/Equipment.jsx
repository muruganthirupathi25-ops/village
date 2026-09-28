function Equipment() {
  return (
    <div className="service-page">

      <div className="service-heading">
        <span>🚜</span>

        <div>
          <h2>Equipment Rental</h2>
          <p>
            Agricultural equipment support
          </p>
        </div>
      </div>

      <div className="equipment-grid">

        <div className="equipment-card">
          <span>🚜</span>
          <h3>Tractor</h3>
          <p>Available for field preparation.</p>
          <strong>₹1,500 / Day</strong>
        </div>

        <div className="equipment-card">
          <span>🌾</span>
          <h3>Harvester</h3>
          <p>Available for harvesting activities.</p>
          <strong>₹2,500 / Day</strong>
        </div>

        <div className="equipment-card">
          <span>💧</span>
          <h3>Water Pump</h3>
          <p>Available for irrigation support.</p>
          <strong>₹500 / Day</strong>
        </div>

      </div>

    </div>
  );
}

export default Equipment;