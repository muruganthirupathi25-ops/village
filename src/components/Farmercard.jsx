import { Link } from "react-router-dom";

function FarmerCard({ farmer }) {
  return (
    <div className="content-card">
      <div className="card-icon">👨‍🌾</div>

      <h3>{farmer.name}</h3>

      <p>
        <strong>Village:</strong> {farmer.village}
      </p>

      <p>
        <strong>Land:</strong> {farmer.land}
      </p>

      <p>
        <strong>Crop:</strong> {farmer.crop}
      </p>

      <Link
        to={`/farmers/${farmer.id}`}
        className="card-button"
      >
        View Farmer
      </Link>
    </div>
  );
}

export default FarmerCard;