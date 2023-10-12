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
  const [showItems, setShowItems] = useState(false);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, areaName, cuisines, costForTwoMessage, locality, avgRating } =
    resInfo.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const ResCard = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  //To Iterate through all categories
  const categories = ResCard.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      {/* Restaurant Details Container */}
      <div>
        <h3>{name}</h3>
        <p>
          {areaName} , {locality}
        </p>
        <p>Cuisines : {cuisines.join(",")}</p>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div>
        {categories.map((cat) => {
          return (
            <div>
              <div
                onClick={handleClick}
                className="flex justify-between m-5 cursor-pointer w-6/12 mx-auto my-5 bg-gray-50 rounded-sm shadow-lg p-4 "
              >
                {cat?.card?.card.title} <span>🔽</span>
              </div>
              {showItems && <ResMenuCategories category={cat} setShowItems />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantInfo;
