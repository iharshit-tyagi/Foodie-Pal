import { MENU_ITEM_IMG_URL } from "../utils/constants";
const RestaurantMenuItem = (props) => {
  const { itemDetails } = props;

  const { name, imageId, price, description, id } = itemDetails?.card?.info;
  return (
    <li>
      <div className="flex justify-between mx-7 my-9 border border-solid border-black bg-orange-50">
        <div className="item-details-container">
          <h2 className="font-bold">{name}</h2>
          <p className="item-price"> Rs.{price / 100}</p>
          <p> {description}</p>
        </div>
        <div className="item-img-container">
          <img className="w-40" src={MENU_ITEM_IMG_URL + imageId} />
        </div>
      </div>
    </li>
  );
};
export default RestaurantMenuItem;
