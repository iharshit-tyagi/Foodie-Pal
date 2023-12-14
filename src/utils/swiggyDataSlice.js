import { createSlice } from "@reduxjs/toolkit";

const swiggyDataSlice = createSlice({
  name: "swiggyData",
  initialState: {
    wholeData: null,
    restaurantList: [],
    filteredListOfRestaurant: [],
    bestOffers: null,
    itemCategories: null,
    topRestaurantChains: null,
    resListByItem: [],
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
    addWholeData: (state, action) => {
      state.wholeData = action.payload;
    },
    addresListByItem: (state, action) => {
      state.resListByItem = action.payload;
    },
    clearResListByItem: (state, action) => {
      state.resListByItem = [];
    },
  },
});
export const {
  addBestOffers,
  addItemCategories,
  addRestaurants,
  addTopRestaurantChains,
  addWholeData,
  addresListByItem,
  clearResListByItem,
} = swiggyDataSlice.actions;
export default swiggyDataSlice.reducer;
