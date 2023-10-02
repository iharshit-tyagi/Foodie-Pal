import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";
import { useState } from "react";
const Body = () => {
  //State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  let vegFilter = false;
  let topResFilter = false;
  return (
    <div className="body-container">
      <div className="filter-container">
        <button
          className="top-res-filter-btn"
          onClick={() => {
            const topRatedResList = resList.filter(
              (obj) => obj.info.avgRating > 4.2
            );
            setListOfRestaurants(topRatedResList);
          }}
        >
          Top Rated Restaurant 🌟
        </button>

        <button
          className="veg-res-btn"
          onClick={() => {
            const vegResList = resList.filter((obj) => "veg" in obj.info);
            // setListOfRestaurants(resList);
            setListOfRestaurants(vegResList);
          }}
        >
          Veg Restaurants
        </button>
        <button
          className="remove-filter-btn"
          onClick={() => {
            setListOfRestaurants(resList);
          }}
        >
          Remove Filters
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((ele) => (
          <RestaurantCard key={ele.info.id} resObj={ele} />
        ))}
      </div>
    </div>
  );
};

export default Body;
