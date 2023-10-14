import { MENU_ITEM_IMG_URL } from "../utils/constants";
const RestaurantMenuItem = (props) => {
  const { itemDetails } = props;
  const { name, imageId, price, description, id, defaultPrice } =
    itemDetails?.info;
  console.log(itemDetails);
  return (
    <ul>
      <li>
        <div className="flex justify-between  cursor-pointer w-8/12 mx-auto  bg-gray-100 rounded-sm shadow-lg p-4 border-b-2 border-x-gray-100 hover:shadow-blue-200 ">
          <div className="item-details-container">
            <h2 className="font-bold">{name}</h2>
            <p className="font-semibold">
              {" "}
              Rs.{Math.ceil(price / 100) || Math.ceil(defaultPrice / 100)}
            </p>
            <p className="text-left text-sm "> {description}</p>
          </div>
          {imageId && (
            <div className="item-img-container">
              <button onClick={() => console.log("clicked")}>
                <img
                  className="h-24 w-24 mx-3"
                  src={imageId && MENU_ITEM_IMG_URL + imageId}
                />
              </button>
            </div>
          )}
        </div>
      </li>
    </ul>
  );
};
export default RestaurantMenuItem;
