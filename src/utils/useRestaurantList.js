import {
  SWIGGY_API_URL_Delhi,
  SWIGGY_API_URL_AGRA,
  SWIGGY_API_URL_PUNE,
} from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  const fetchData = async () => {
    // const data = await fetch(SWIGGY_API_URL_AGRA);
    // const data = await fetch(SWIGGY_API_URL_Delhi);
    const data = await fetch(SWIGGY_API_URL_PUNE);

    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const updateListOfRestaurant = (newValue) => {
    setFilteredListOfRestaurants(newValue);
  };
  return [listOfRestaurants, filteredListOfRestaurants, updateListOfRestaurant];
};
export default useRestaurantList;
