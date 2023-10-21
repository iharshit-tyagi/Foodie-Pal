import { useDispatch } from "react-redux";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const RestaurantMenuItem = (props) => {
  const { itemDetails } = props;
  const { name, imageId, price, description, id, defaultPrice } =
    itemDetails?.info;
  const dispatch = useDispatch();
  const handleAddItem = (itemDetails) => {
    dispatch(addItem(itemDetails));
  };
  return (
    <ul>
      <li>
        <div className="flex justify-around  cursor-pointer w-8/12 mx-auto  bg-gray-100 rounded-sm shadow-lg p-4 border-b-2 border-x-gray-100 hover:shadow-blue-200 ">
          <div className="w-9/12">
            <h2 className="font-bold">{name}</h2>
            <p className="font-semibold">
              ₹ {Math.ceil(price / 100) || Math.ceil(defaultPrice / 100)}
            </p>
            <p className="text-left text-sm "> {description}</p>
          </div>
          {imageId && (
            <div className="relative">
              <div className="absolute bg-black text-white shadow-lg rounded-sm bottom-0 left-1/4 ">
                <button
                  className="px-2"
                  onClick={() => handleAddItem(itemDetails)}
                >
                  Add +{" "}
                </button>
              </div>

              <img
                className="h-24 w-28"
                src={imageId && MENU_ITEM_IMG_URL + imageId}
              />
            </div>
          )}
        </div>
      </li>
    </ul>
  );
};
export default RestaurantMenuItem;
