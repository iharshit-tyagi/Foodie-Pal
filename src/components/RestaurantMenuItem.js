import { MENU_ITEM_IMG_URL } from "../utils/constants";
const RestaurantMenuItem = (props) => {
  const { itemDetails } = props;
  const { name, imageId, price, description, id } = itemDetails?.info;
  console.log(itemDetails);
  return (
    <ul>
      <li>
        <div className="flex justify-between m-5 cursor-pointer w-8/12 mx-auto my-5 bg-orange-50 rounded-sm shadow-lg p-4 ">
          <div className="item-details-container">
            <h2 className="font-bold">{name}</h2>
            <p className="font-semibold"> Rs.{price / 100}</p>
            {/* <p className="text-left"> {description}</p> */}
          </div>
          <div className="item-img-container">
            <button onClick={() => console.log("clicked")}>
              <img
                className="h-24 w-24 mx-3"
                src={MENU_ITEM_IMG_URL + imageId}
              />
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default RestaurantMenuItem;
