import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addFarmer } from "../redux/farmerSlice";

function AddFarmer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    village: "",
    district: "",
    phone: "",
    land: "",
    crop: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.village.trim()) {
      newErrors.village = "Village is required";
    }

    if (!form.district.trim()) {
      newErrors.district = "District is required";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone =
        "Enter a valid 10 digit phone number";
    }

    if (!form.land.trim()) {
      newErrors.land = "Land size is required";
    }

    if (!form.crop.trim()) {
      newErrors.crop = "Crop is required";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(
      addFarmer({
        id: Date.now(),
        ...form,
      })
    );

    navigate("/farmers");
  };

  return (
    <main className="page">

      <section className="page-header">
        <p>FARMER MANAGEMENT</p>
        <h1>Add New Farmer</h1>
      </section>

      <section className="form-section">

        <form
          className="form-card"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Farmer Name</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter farmer name"
            />

            {errors.name && (
              <small>{errors.name}</small>
            )}
          </div>

          <div className="form-group">
            <label>Village</label>

            <input
              name="village"
              value={form.village}
              onChange={handleChange}
              placeholder="Enter village"
            />

            {errors.village && (
              <small>{errors.village}</small>
            )}
          </div>

          <div className="form-group">
            <label>District</label>

            <input
              name="district"
              value={form.district}
              onChange={handleChange}
              placeholder="Enter district"
            />

            {errors.district && (
              <small>{errors.district}</small>
            )}
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />

            {errors.phone && (
              <small>{errors.phone}</small>
            )}
          </div>

          <div className="form-group">
            <label>Land Size</label>

            <input
              name="land"
              value={form.land}
              onChange={handleChange}
              placeholder="Example 5 Acres"
            />

            {errors.land && (
              <small>{errors.land}</small>
            )}
          </div>

          <div className="form-group">
            <label>Main Crop</label>

            <input
              name="crop"
              value={form.crop}
              onChange={handleChange}
              placeholder="Enter main crop"
            />

            {errors.crop && (
              <small>{errors.crop}</small>
            )}
          </div>

          <button className="submit-button">
            Add Farmer
          </button>

        </form>

      </section>

    </main>
  );
}

export default AddFarmer;