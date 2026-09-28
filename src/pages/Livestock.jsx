import AnimalCard from "../components/AnimalCard";
import livestock from "../data/livestock";

function Livestock() {
  return (
    <main className="page">

      <section className="page-header">
        <p>ANIMAL MANAGEMENT</p>
        <h1>Village Livestock</h1>
        <span>
          Manage cattle, goats and poultry
        </span>
      </section>

      <section className="section">

        <div className="card-grid">

          {livestock.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Livestock;