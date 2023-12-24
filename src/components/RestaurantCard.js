import { RES_LOGO_CDN } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resObj } = props;

  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resObj?.info;
  return (
    <div className="shadow-xl	rounded-lg m-4 p-3 w-56 h-80 bg-white cursor-pointer box-border hover:shadow-blue-200 hover:border hover:border-solid hover:border-gray-400">
      {/* <div className="res-logo-container"> */}
      <img
        className="rounded-tl-lg h-1/2 w-11/12 mx-auto"
        src={RES_LOGO_CDN + cloudinaryImageId}
      />
      {/* </div> */}
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h5 className="overflow-hidden whitespace-nowrap text-ellipsis">
        {cuisines.join(", ")}
      </h5>
      <h5>{costForTwo}</h5>
      <p> Rating {avgRating} ⭐</p>
    </div>
  );
};
export default RestaurantCard;
