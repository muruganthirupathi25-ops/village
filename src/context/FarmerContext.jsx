import { createContext, useContext, useState } from "react";

const FarmerContext = createContext();

export function FarmerProvider({ children }) {
  const [currentFarmer, setCurrentFarmer] = useState({
    name: "Thirupathi",
    village: "Dharmapuri",
    role: "Farmer",
  });

  return (
    <FarmerContext.Provider
      value={{
        currentFarmer,
        setCurrentFarmer,
      }}
    >
      {children}
    </FarmerContext.Provider>
  );
}

export function useFarmer() {
  return useContext(FarmerContext);
}