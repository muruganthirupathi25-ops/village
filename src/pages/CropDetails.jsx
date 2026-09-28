import { Link, useParams } from "react-router-dom";

import crops from "../data/crops";

function CropDetails() {
  const { id } = useParams();

  const crop = crops.find(
    (item) => item.id === Number(id)
  );

  if (!crop) {
    return (
      <main className="page">
        <section className="empty-state">
          <h2>Crop Not Found</h2>

          <Link to="/crops">
            Back to Crops
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page">

      <section className="page-header">
        <p>CROP DETAILS</p>
        <h1>{crop.name}</h1>
      </section>

      <section className="details-section">

        <div className="profile-card">
          <div className="large-icon">🌱</div>
          <h2>{crop.name}</h2>
          <p>{crop.category}</p>
        </div>

        <div className="details-card">

          <h2>Crop Information</h2>

          <div className="details-grid">

            <div>
              <span>Season</span>
              <strong>{crop.season}</strong>
            </div>

            <div>
              <span>Water Requirement</span>
              <strong>{crop.water}</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>{crop.category}</strong>
            </div>

          </div>

          <p className="details-description">
            {crop.description}
          </p>

        </div>

      </section>

    </main>
  );
}

export default CropDetails;