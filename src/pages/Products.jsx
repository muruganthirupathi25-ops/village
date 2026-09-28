import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const category =
    searchParams.get("category") || "All";

  const search =
    searchParams.get("search") || "";

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" ||
        product.category === category;

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const handleCategory = (value) => {
    const params = new URLSearchParams(
      searchParams
    );

    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    setSearchParams(params);
  };

  const handleSearch = (event) => {
    const value = event.target.value;

    const params = new URLSearchParams(
      searchParams
    );

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  };

  return (
    <main className="page">

      <section className="page-header">
        <p>FARMING MARKET</p>
        <h1>Farming Products</h1>
        <span>
          Seeds, feed, tools and farming products
        </span>
      </section>

      <section className="section">

        <div className="product-toolbar">

          <input
            className="search-input"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
          />

          <div className="filter-buttons">

            {[
              "All",
              "Seeds",
              "Fertilizer",
              "Animal Feed",
              "Tools",
            ].map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() =>
                  handleCategory(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="card-grid">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="empty-state">
              <h2>No Products Found</h2>
              <p>
                Try a different search or category.
              </p>
            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Products;