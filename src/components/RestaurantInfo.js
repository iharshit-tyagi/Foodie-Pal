import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantInfo = () => {
  // const [resInfo, setresInfo] = useState(null);

  const params = useParams();
  const { resID } = params;
  const resInfo = useRestaurantMenu(resID);

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
    <div>
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
        <ul className=" ">
          <li>
            <h2 className="font-bold">{title}</h2>
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
