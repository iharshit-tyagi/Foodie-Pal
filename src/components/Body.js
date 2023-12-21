import RestaurantCard from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import { useState } from "react";
import Shimmer from "../components/Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import BestOffersContainer from "./BestOffersContainer";
import ItemCategoriesContainer from "./ItemCategoriesContainer";
import { TopResChains } from "./TopResChains";

const Body = () => {
  //State Variable

  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredListOfRestaurants, updateListOfRestaurant] =
    useRestaurantList();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="flex justify-center items-center">
        <h1 className="">
          OOPs! You are offline , Please Check Your Internet Connection
        </h1>
      </div>
    );

  //Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <div className="">
      <Shimmer />
    </div>
  ) : (
    <div className="w-screen ">
      <div className="mx-auto">
        <BestOffersContainer />
      </div>
      <div className="mx-auto">
        <ItemCategoriesContainer />
      </div>
      <div className="mx-auto">
        <TopResChains />
      </div>
      <div className="">
        {/* //Filters and Search Div */}
        <div className="m-4 p-4 flex  ">
          <input
            className=" m-3 px-4 py-1 border border-solid border-black flex-1"
            type="text"
            placeholder="Enter the Restaurant name"
            value={searchText}
            onChange={(e) => {
              const currentSearch = e.currentTarget.value;
              setSearchText(currentSearch);
            }}
          ></input>
          <button
            className=" bg-slate-300 px-4 py-2 m-4 rounded-lg "
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
        <h2 className="px-9 text-2xl font-bold ">
          Restaurants with Online Food Delivery
        </h2>
        <div className="mx-auto w-4/5 grid grid-cols-3 gap-2  ">
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
    </div>
  );
};

export default Body;
