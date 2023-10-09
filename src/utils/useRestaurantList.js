import { SWIGGY_API_URL_Delhi, SWIGGY_API_URL_AGRA } from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //  const data = await fetch(SWIGGY_API_URL_AGRA);
    const data = await fetch(SWIGGY_API_URL_Delhi);
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

  return [listOfRestaurants, filteredListOfRestaurants];
};
export default useRestaurantList;
