import { useRef, useState } from "react";

import { useFarmer } from "../context/FarmerContext";

function Profile() {
  const { currentFarmer } = useFarmer();

  const inputRef = useRef(null);

  const [image, setImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="page">

      <section className="page-header">
        <p>FARMER ACCOUNT</p>
        <h1>My Profile</h1>
      </section>

      <section className="profile-page">

        <div className="profile-card large-profile">

          <div
            className="profile-image"
            onClick={() =>
              inputRef.current.click()
            }
          >

            {image ? (
              <img
                src={image}
                alt="Farmer"
              />
            ) : (
              "👨‍🌾"
            )}

          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />

          <button
            className="outline-button"
            onClick={() =>
              inputRef.current.click()
            }
          >
            Change Image
          </button>

          <h2>{currentFarmer.name}</h2>

          <p>{currentFarmer.role}</p>

        </div>

        <div className="details-card">

          <h2>Profile Information</h2>

          <div className="details-grid">

            <div>
              <span>Name</span>
              <strong>
                {currentFarmer.name}
              </strong>
            </div>

            <div>
              <span>Village</span>
              <strong>
                {currentFarmer.village}
              </strong>
            </div>

            <div>
              <span>Role</span>
              <strong>
                {currentFarmer.role}
              </strong>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Profile;