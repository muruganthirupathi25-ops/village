import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import farmerReducer from "./farmerSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    farmers: farmerReducer,
  },
});