import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="content-card product-card">

      <div className="product-icon">
        {product.icon}
      </div>

      <h3>{product.name}</h3>

      <p className="product-category">
        {product.category}
      </p>

      <h3 className="product-price">
        ₹{product.price}
      </h3>

      <p>
        Available: {product.stock}
      </p>

      <button
        className="card-button"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;