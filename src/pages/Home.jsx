import { Link } from "react-router-dom";

import crops from "../data/crops";

function Home() {
  return (
    <main>

      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <p className="hero-label">
              🌾 VILLAGE FARMING PLATFORM
            </p>

            <h1>
              Smart Farming
              <br />
              Better Village
              <br />
              Better Future
            </h1>

            <p className="hero-description">
              Like Village Farming brings farmers, crops, livestock,
              farming products and village services
              together in one simple platform.
            </p>

            <div className="hero-buttons">

              <Link
                to="/farmers"
                className="primary-button"
              >
                Explore Farmers
              </Link>

              <Link
                to="/products"
                className="secondary-button"
              >
                View Products
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-card">
          <span>👨‍🌾</span>
          <h2>120+</h2>
          <p>Farmers</p>
        </div>

        <div className="stat-card">
          <span>🌱</span>
          <h2>45+</h2>
          <p>Crops</p>
        </div>

        <div className="stat-card">
          <span>🐄</span>
          <h2>85+</h2>
          <p>Livestock</p>
        </div>

        <div className="stat-card">
          <span>🛒</span>
          <h2>60+</h2>
          <p>Products</p>
        </div>

      </section>

      <section className="section">

        <div className="section-heading">
          <p>OUR FARMING</p>
          <h2>Popular Crops</h2>
          <span>
            Explore crops commonly grown by farmers
          </span>
        </div>

        <div className="card-grid">

          {crops.slice(0, 4).map((crop) => (
            <div className="mini-card" key={crop.id}>

              <div>🌱</div>

              <h3>{crop.name}</h3>

              <p>{crop.category}</p>

            </div>
          ))}

        </div>

      </section>

      <section className="section">

        <div className="section-heading">
          <p>VILLAGE CARE</p>
          <h2>Our Services</h2>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <span>🐄</span>

            <h3>Veterinary Care</h3>

            <p>
              Animal health and veterinary support
              for farmers.
            </p>
          </div>

          <div className="service-card">
            <span>🌾</span>

            <h3>Crop Support</h3>

            <p>
              Useful information and support
              for farming activities.
            </p>
          </div>

          <div className="service-card">
            <span>🚜</span>

            <h3>Equipment Rental</h3>

            <p>
              Agricultural equipment information
              and rental support.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;