import RestaurantMenuItem from "./RestaurantMenuItem";
import { useState } from "react";
const ResMenuCategories = (props) => {
  const { category } = props;
  const { itemCards } = category?.card?.card;
  //   console.log(itemCards[0].card.info.name);
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="flex justify-between m-5 cursor-pointer w-6/12 mx-auto my-5 bg-blue-50 rounded-sm shadow-lg p-4 "
      >
        {category?.card?.card.title} <span>🔽</span>
      </div>
      {showItems &&
        itemCards.map((itemInfo) => {
          return <RestaurantMenuItem itemDetails={itemInfo.card} />;
        })}
    </div>
  );
};
export default ResMenuCategories;
