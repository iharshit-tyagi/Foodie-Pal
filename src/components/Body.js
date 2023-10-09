import RestaurantCard from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import { useState } from "react";
import Shimmer from "../components/Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //State Variable

  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredListOfRestaurants] = useRestaurantList();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1> OOPs! You are offline , Please Check Youour Internet Connection</h1>
    );
  //Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <div className="shimmer-container">
      <Shimmer />
    </div>
  ) : (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter the Restaurant name"
          value={searchText}
          onChange={(e) => {
            const currentSearch = e.currentTarget.value;
            setSearchText(currentSearch);
          }}
        ></input>
        <button
          className="search-btn "
          onClick={() => {
            const searchResultList = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredListOfRestaurants(searchResultList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter-container">
        <button
          className="top-res-filter-btn"
          onClick={() => {
            const topRatedResList = listOfRestaurants.filter(
              (obj) => obj.info.avgRating > 4.2
            );
            setFilteredListOfRestaurants(topRatedResList);
          }}
        >
          Top Rated Restaurant 🌟
        </button>

        <button
          className="veg-res-btn"
          onClick={() => {
            const vegResList = listOfRestaurants.filter(
              (obj) => "veg" in obj.info
            );
            // setListOfRestaurants(resList);
            setFilteredListOfRestaurants(vegResList);
          }}
        >
          Veg Restaurants
        </button>
        <button
          className="remove-filter-btn"
          onClick={() => {
            setFilteredListOfRestaurants(listOfRestaurants);
          }}
        >
          Remove Filters
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((ele) => (
          <Link
            to={"/restaurants/" + ele.info.id}
            className="res-menu-link"
            key={ele.info.id}
          >
            <RestaurantCard resObj={ele} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
