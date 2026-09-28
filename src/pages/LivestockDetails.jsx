import { Link, useParams } from "react-router-dom";

import livestock from "../data/livestock";

function LivestockDetails() {
  const { id } = useParams();

  const animal = livestock.find(
    (item) => item.id === Number(id)
  );

  if (!animal) {
    return (
      <main className="page">
        <section className="empty-state">
          <h2>Animal Not Found</h2>

          <Link to="/livestock">
            Back to Livestock
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page">

      <section className="page-header">
        <p>ANIMAL DETAILS</p>
        <h1>{animal.name}</h1>
      </section>

      <section className="details-section">

        <div className="profile-card">

          <div className="large-icon">
            {animal.type === "Cow"
              ? "🐄"
              : animal.type === "Goat"
              ? "🐐"
              : "🐔"}
          </div>

          <h2>{animal.name}</h2>

          <p>{animal.type}</p>

        </div>

        <div className="details-card">

          <h2>Animal Information</h2>

          <div className="details-grid">

            <div>
              <span>Type</span>
              <strong>{animal.type}</strong>
            </div>

            <div>
              <span>Breed</span>
              <strong>{animal.breed}</strong>
            </div>

            <div>
              <span>Age</span>
              <strong>{animal.age}</strong>
            </div>

            <div>
              <span>Health</span>
              <strong>{animal.health}</strong>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default LivestockDetails;