import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuItem from "./RestaurantMenuItem";
import ResMenuCategories from "./ResMenuCategories";
import { useState } from "react";

const RestaurantInfo = () => {
  const params = useParams();
  const { resID } = params;
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const {
    name,
    areaName,
    cuisines,
    costForTwoMessage,
    locality,
    avgRating,
    totalRatingsString,
  } = resInfo.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const ResCard = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  //To Iterate through all categories
  const categories = ResCard.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      {/* Restaurant Details Container */}
      <div className="text-center w-8/12 mx-auto my-5 bg-white flex justify-around py-3 rounded-lg border border-solid border-gray-300 shadow-md">
        {/* Restaurant details Div */}
        <div className="text-left">
          <h3 className="font-semibold text-xl line-clamp-6">{name}</h3>
          <p className="font-semibold">Cuisines : {cuisines.join(", ")}</p>
          <h4>{costForTwoMessage}</h4>
        </div>
        {/* Restaurant Ratings Div */}
        <div className=" my-auto  bg-blue-50 rounded-lg shadow-lg  p-2">
          <span className=" text-black text-xl font-semibold  border-b-2 border-dashed border-gray-400">
            {avgRating + "⭐"}
          </span>
          <div>{totalRatingsString}</div>
        </div>
      </div>
      {/* Restaurant Menu */}
      <div>
        {categories.map((cat) => {
          return (
            <div key={cat?.card?.card?.title}>
              {<ResMenuCategories category={cat} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantInfo;
