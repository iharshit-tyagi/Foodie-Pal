import { RES_LOGO_CDN } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resObj?.info;
  return (
    <div className="m-4 p-4 w-52 bg-gray-50">
      {/* <div className="res-logo-container"> */}
      <img className="rounded-tl-lg" src={RES_LOGO_CDN + cloudinaryImageId} />
      {/* </div> */}
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h5> Cuisines :{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <p> Rating {avgRating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;
