import { Link, useParams } from "react-router-dom";

import farmers from "../data/farmers";

function FarmerDetails() {
  const { id } = useParams();

  const farmer = farmers.find(
    (item) => item.id === Number(id)
  );

  if (!farmer) {
    return (
      <main className="page">
        <section className="empty-state">
          <h2>Farmer Not Found</h2>

          <Link to="/farmers">
            Back to Farmers
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page">

      <section className="page-header">
        <p>FARMER DETAILS</p>
        <h1>{farmer.name}</h1>
      </section>

      <section className="details-section">

        <div className="profile-card">

          <div className="large-icon">
            👨‍🌾
          </div>

          <h2>{farmer.name}</h2>

          <p>{farmer.village}</p>

        </div>

        <div className="details-card">

          <h2>Farmer Information</h2>

          <div className="details-grid">

            <div>
              <span>Village</span>
              <strong>{farmer.village}</strong>
            </div>

            <div>
              <span>District</span>
              <strong>{farmer.district}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{farmer.phone}</strong>
            </div>

            <div>
              <span>Land</span>
              <strong>{farmer.land}</strong>
            </div>

            <div>
              <span>Main Crop</span>
              <strong>{farmer.crop}</strong>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default FarmerDetails;