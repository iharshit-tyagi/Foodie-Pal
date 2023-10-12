import { RES_LOGO_CDN } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resObj?.info;
  return (
    <div className="shadow-xl	 m-4 p-4 w-52 h-96 bg-gray-100 hover:bg-orange-100 cursor-pointer box-border shadow-orange-200">
      {/* <div className="res-logo-container"> */}
      <img
        className="rounded-tl-lg h-1/2 w-5/6 mx-auto"
        src={RES_LOGO_CDN + cloudinaryImageId}
      />
      {/* </div> */}
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h5 className="w-full">{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <p> Rating {avgRating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;
