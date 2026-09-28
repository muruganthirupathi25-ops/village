import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FarmerCard from "../components/FarmerCard";
import farmers from "../data/farmers";
import { deleteFarmer } from "../redux/farmerSlice";

function Farmers() {
  const dispatch = useDispatch();

  const addedFarmers = useSelector(
    (state) => state.farmers.farmers
  );

  const allFarmers = [
    ...farmers,
    ...addedFarmers,
  ];

  const handleDelete = (id) => {
    dispatch(deleteFarmer(id));
  };

  return (
    <main className="page">

      <section className="page-header">
        <p>FARMER MANAGEMENT</p>
        <h1>Village Farmers</h1>
        <span>
          Manage farmer information
        </span>
      </section>

      <section className="section">

        <div className="page-toolbar">

          <div>
            <h2>Farmers</h2>
            <p>
              Total Farmers: {allFarmers.length}
            </p>
          </div>

          <Link
            to="/farmers/add"
            className="primary-small-button"
          >
            + Add Farmer
          </Link>

        </div>

        <div className="card-grid">

          {allFarmers.map((farmer) => (
            <div key={farmer.id}>

              <FarmerCard farmer={farmer} />

              {addedFarmers.some(
                (item) => item.id === farmer.id
              ) && (
                <button
                  className="delete-button"
                  onClick={() =>
                    handleDelete(farmer.id)
                  }
                >
                  Delete
                </button>
              )}

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Farmers;