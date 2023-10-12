import RestaurantCard from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import { useState } from "react";
import Shimmer from "../components/Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //State Variable

  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredListOfRestaurants, updateListOfRestaurant] =
    useRestaurantList();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div className="flex justify-center">
        <h1 className="">
          OOPs! You are offline , Please Check Youour Internet Connection
        </h1>
      </div>
    );
  //Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <div className="">
      <Shimmer />
    </div>
  ) : (
    <div className="relative">
      <div className="m-4 p-4  ">
        <input
          className=" m-3 px-4 py-1 border border-solid border-black"
          type="text"
          placeholder="Enter the Restaurant name"
          value={searchText}
          onChange={(e) => {
            const currentSearch = e.currentTarget.value;
            setSearchText(currentSearch);
          }}
        ></input>
        <button
          className=" bg-slate-300 px-4 py-2 m-4 rounded-lg"
          onClick={() => {
            const searchResultList = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            // setFilteredListOfRestaurants(searchResultList);
            updateListOfRestaurant(searchResultList);
          }}
        >
          Search
        </button>

        <button
          className=" bg-slate-300 px-4 py-2 m-4 rounded-full"
          onClick={() => {
            const topRatedResList = listOfRestaurants.filter(
              (obj) => obj.info.avgRating > 4.2
            );
            // setFilteredListOfRestaurants(topRatedResList);
            updateListOfRestaurant(topRatedResList);
          }}
        >
          Top Rated Restaurant 🌟
        </button>

        <button
          className=" bg-green-400 px-4 py-2 m-4 rounded-full"
          onClick={() => {
            const vegResList = listOfRestaurants.filter(
              (obj) => "veg" in obj.info
            );
            updateListOfRestaurant(vegResList);
            // setFilteredListOfRestaurants(vegResList);
          }}
        >
          Veg Restaurants
        </button>
        <button
          className="remove-filter-btn"
          onClick={() => {
            // setFilteredListOfRestaurants(listOfRestaurants);
            updateListOfRestaurant(listOfRestaurants);
          }}
        >
          Remove Filters
        </button>
      </div>
      <div className="flex flex-wrap center ">
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
