import { createSlice } from "@reduxjs/toolkit";

const swiggyDataSlice = createSlice({
  name: "swiggyData",
  initialState: {
    bestOffers: null,
    itemCategories: null,
  },
  reducers: {
    addBestOffers: (state, action) => {
      state.bestOffers = action.payload;
    },
    addItemCategories: (state, action) => {
      state.itemCategories = action.payload;
    },
  },
});
export const { addBestOffers, addItemCategories } = swiggyDataSlice.actions;
export default swiggyDataSlice.reducer;
