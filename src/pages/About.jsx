function About() {
  return (
    <main className="page">

      <section className="page-header">
        <p>ABOUT US</p>
        <h1>About PashuCare</h1>
        <span>
          Technology for village farming
        </span>
      </section>

      <section className="section about-section">

        <div className="about-content">

          <div>
            <div className="about-icon">
              🌾
            </div>

            <h2>
              Supporting Village Farmers
            </h2>

            <p>
              PashuCare is a frontend farming application
              created to bring important village farming
              activities into one digital platform.
            </p>

            <p>
              Farmers can manage their information,
              explore crops, view livestock, discover
              farming products and access useful services.
            </p>
          </div>

          <div className="about-list">

            <div>✓ Farmer Management</div>
            <div>✓ Crop Information</div>
            <div>✓ Livestock Management</div>
            <div>✓ Farming Products</div>
            <div>✓ Veterinary Services</div>
            <div>✓ Village Support</div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;