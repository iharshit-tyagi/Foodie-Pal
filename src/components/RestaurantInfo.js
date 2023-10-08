import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantMenuItem from "./RestaurantMenuItem";
const RestaurantInfo = () => {
  const [resInfo, setresInfo] = useState(null);

  const params = useParams();
  const { resID } = params;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(RES_MENU_API_URL + resID);
    const json = await menuData.json();
    setresInfo(json?.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, areaName, cuisines, costForTwoMessage, locality, avgRating } =
    resInfo.cards[0]?.card?.card?.info;
  const { itemCards, title } =
    // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //Below line works fine with Punjabi Angithi
  // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?.categories[0];
  return (
    <div className="res-menu-container">
      {/* Restaurant Details Container */}
      <div>
        <h3>{name}</h3>
        <p>
          {areaName} , {locality}
        </p>
        <p>Cuisines : {cuisines.join(",")}</p>
        <h4>
          {costForTwoMessage} - {avgRating}⭐
        </h4>
      </div>

      {/* For the Items in the Menu - 
      Generating Each Item in a category*/}
      <div>
        <ul className="menu-item-list">
          <li>
            <h2>{title}</h2>
          </li>

          {itemCards.map((itemCard) => {
            return (
              <RestaurantMenuItem
                key={itemCard?.card?.info.id}
                itemDetails={itemCard}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantInfo;
