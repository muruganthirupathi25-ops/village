import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import Farmers from "./pages/Farmers";
import AddFarmer from "./pages/AddFarmer";
import FarmerDetails from "./pages/FarmerDetails";

import Crops from "./pages/Crops";
import CropDetails from "./pages/CropDetails";

import Livestock from "./pages/Livestock";
import LivestockDetails from "./pages/LivestockDetails";

import Products from "./pages/Products";

import Services from "./pages/Services";
import Veterinary from "./pages/Veterinary";
import CropSupport from "./pages/CropSupport";
import Equipment from "./pages/Equipment";

import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/farmers" element={<Farmers />} />
        <Route path="/farmers/add" element={<AddFarmer />} />
        <Route path="/farmers/:id" element={<FarmerDetails />} />

        <Route path="/crops" element={<Crops />} />
        <Route path="/crops/:id" element={<CropDetails />} />

        <Route path="/livestock" element={<Livestock />} />
        <Route
          path="/livestock/:id"
          element={<LivestockDetails />}
        />

        <Route path="/products" element={<Products />} />

        <Route path="/services" element={<Services />}>
          <Route path="veterinary" element={<Veterinary />} />
          <Route path="crop-support" element={<CropSupport />} />
          <Route path="equipment" element={<Equipment />} />
        </Route>

        <Route path="/orders" element={<Orders />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>404</h1>
              <p>Page not found</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;