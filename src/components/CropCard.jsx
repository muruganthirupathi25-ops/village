import { Link } from "react-router-dom";

function CropCard({ crop }) {
  return (
    <div className="content-card">

      <div className="card-icon">🌱</div>

      <h3>{crop.name}</h3>

      <p>
        <strong>Season:</strong> {crop.season}
      </p>

      <p>
        <strong>Water:</strong> {crop.water}
      </p>

      <p>
        <strong>Category:</strong> {crop.category}
      </p>

      <Link
        to={`/crops/${crop.id}`}
        className="card-button"
      >
        View Details
      </Link>

    </div>
  );
}

export default CropCard;