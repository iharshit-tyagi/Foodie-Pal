import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import swiggyDataSlice from "./swiggyDataSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    swiggyData: swiggyDataSlice,
  },
});
export default appStore;
