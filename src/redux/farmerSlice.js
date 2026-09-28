import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farmers: [],
};

const farmerSlice = createSlice({
  name: "farmers",
  initialState,

  reducers: {
    addFarmer: (state, action) => {
      state.farmers.push(action.payload);
    },

    updateFarmer: (state, action) => {
      const index = state.farmers.findIndex(
        (farmer) => farmer.id === action.payload.id
      );

      if (index !== -1) {
        state.farmers[index] = action.payload;
      }
    },

    deleteFarmer: (state, action) => {
      state.farmers = state.farmers.filter(
        (farmer) => farmer.id !== action.payload
      );
    },
  },
});

export const {
  addFarmer,
  updateFarmer,
  deleteFarmer,
} = farmerSlice.actions;

export default farmerSlice.reducer;