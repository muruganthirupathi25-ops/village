import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTheme } from "../context/ThemeContext";
import { useFarmer } from "../context/FarmerContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { currentFarmer } = useFarmer();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">

      <div className="navbar-container">

        <NavLink to="/" className="logo">
          🌾 Like Village Farming
        </NavLink>

        <nav className="nav-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/farmers">Farmers</NavLink>

          <NavLink to="/crops">Crops</NavLink>

          <NavLink to="/livestock">
            Livestock
          </NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/services">
            Services
          </NavLink>

          <NavLink to="/orders">
            Orders
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        <div className="nav-actions">

          <NavLink
            to="/profile"
            className="profile-link"
          >
            👤 {currentFarmer.name}
          </NavLink>

          <button
            className="theme-button"
            onClick={toggleTheme}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <NavLink
            to="/orders"
            className="cart-link"
          >
            🛒 {cartCount}
          </NavLink>

        </div>

      </div>

    </header>
  );
}

export default Navbar;