import { Link } from "react-router-dom";

function AnimalCard({ animal }) {
  return (
    <div className="content-card">

      <div className="card-icon">
        {animal.type === "Cow"
          ? "🐄"
          : animal.type === "Goat"
          ? "🐐"
          : "🐔"}
      </div>

      <h3>{animal.name}</h3>

      <p>
        <strong>Type:</strong> {animal.type}
      </p>

      <p>
        <strong>Breed:</strong> {animal.breed}
      </p>

      <p>
        <strong>Health:</strong>{" "}
        <span
          className={
            animal.health === "Healthy"
              ? "status healthy"
              : "status warning"
          }
        >
          {animal.health}
        </span>
      </p>

      <Link
        to={`/livestock/${animal.id}`}
        className="card-button"
      >
        View Details
      </Link>

    </div>
  );
}

export default AnimalCard;