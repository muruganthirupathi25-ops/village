import { NavLink, Outlet } from "react-router-dom";

function Services() {
  return (
    <main className="page">

      <section className="page-header">
        <p>VILLAGE SUPPORT</p>
        <h1>Farming Services</h1>
        <span>
          Services for farmers and livestock
        </span>
      </section>

      <section className="section">

        <div className="service-navigation">

          <NavLink to="/services">
            Overview
          </NavLink>

          <NavLink to="/services/veterinary">
            Veterinary Care
          </NavLink>

          <NavLink to="/services/crop-support">
            Crop Support
          </NavLink>

          <NavLink to="/services/equipment">
            Equipment Rental
          </NavLink>

        </div>

        <div className="service-content">

          <Outlet />

          {window.location.pathname ===
            "/services" && (
            <div className="service-overview">

              <h2>Village Farming Services</h2>

              <p>
                Select a service above to learn
                more about available farming support.
              </p>

            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Services;