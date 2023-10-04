import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { SWIGGY_API_URL, SWIGGY_API_URL_AGRA } from "../utils/constants";
const Body = () => {
  //State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  //will Run this callback once the page has been rendered
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
    setFilteredListOfRestaurants(
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
          <RestaurantCard key={ele.info.id} resObj={ele} />
        ))}
      </div>
    </div>
  );
};

export default Body;
