import { RES_LOGO_CDN } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resObj?.info;
  return (
    <div className="res-card">
      {/* <div className="res-logo-container"> */}
      <img className="res-logo" src={RES_LOGO_CDN + cloudinaryImageId} />
      {/* </div> */}
      <h2>{name}</h2>
      <h5> Cuisines :{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <p> Rating {avgRating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;
