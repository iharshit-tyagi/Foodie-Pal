import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_API_URL } from "../utils/constants";
// import Shimmer from "./Shimmer";
const RestaurantsMenu = () => {
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
    return <h1>Yet to be fetched</h1>;
  }
  const { name, areaName, cuisines, costForTwoMessage, locality, avgRating } =
    resInfo.cards[0]?.card?.card?.info;
  console.log(name);
  const { itemCards } = resInfo.cards[2];
  console.log(itemCards);
  return (
    <div className="res-menu-container">
      <h3>{name}</h3>
      <p>
        {areaName} , {locality}
      </p>
      <h4>
        {costForTwoMessage} - {avgRating}
      </h4>
      <h3>Menu</h3>
      <ul>
        {/* {itemCards.map((item) => {
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>;
        })} */}
      </ul>
    </div>
  );
};
export default RestaurantsMenu;
