import CropCard from "../components/CropCard";
import crops from "../data/crops";

function Crops() {
  return (
    <main className="page">

      <section className="page-header">
        <p>AGRICULTURE</p>
        <h1>Village Crops</h1>
        <span>
          Explore crop information
        </span>
      </section>

      <section className="section">

        <div className="card-grid">

          {crops.map((crop) => (
            <CropCard
              key={crop.id}
              crop={crop}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Crops;