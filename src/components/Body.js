import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { SWIGGY_API_URL, SWIGGY_API_URL_AGRA } from "../utils/constants";
const Body = () => {
  //State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL_AGRA);
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter the Restaurant name"
        ></input>
        <button
          className="search-btn "
          onClick={() => {
            console.log("clicked");
            const searchValue = document.querySelector(".search-input").value;
            const searchResultList = resList.filter((obj) =>
              obj.info.name.toLowerCase().includes(searchValue)
            );
            setListOfRestaurants(searchResultList);
          }}

          //
          // <input type="text" className="searchTerm" value={searchText} placeholder="Search for Restaurants and food" onChange={(e)=>{ const currentSearch = e.currentTarget.value.toLowerCase(); setsearchText(currentSearch) }}></input>
        >
          Search
        </button>
      </div>

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
