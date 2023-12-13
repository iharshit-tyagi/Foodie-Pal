import { createSlice } from "@reduxjs/toolkit";

const swiggyDataSlice = createSlice({
  name: "swiggyData",
  initialState: {
    restaurantList: [],
    filteredListOfRestaurant: [],
    bestOffers: null,
    itemCategories: null,
    topRestaurantChains: null,
  },
  reducers: {
    addBestOffers: (state, action) => {
      state.bestOffers = action.payload;
    },
    addItemCategories: (state, action) => {
      state.itemCategories = action.payload;
    },
    addRestaurants: (state, action) => {
      state.restaurantList.push(action.payload);
    },
    addTopRestaurantChains: (state, action) => {
      state.topRestaurantChains = action.payload;
    },
  },
});
export const {
  addBestOffers,
  addItemCategories,
  addRestaurants,
  addTopRestaurantChains,
} = swiggyDataSlice.actions;
export default swiggyDataSlice.reducer;
