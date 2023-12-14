import React from "react";
import { useSelector } from "react-redux";
import { RES_LOGO_CDN } from "../utils/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const ItemCategoriesContainer = () => {
  const itemCategories = useSelector(
    (store) => store.swiggyData.itemCategories
  );

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };
  // console.log(itemCategories);
  return (
    <div className="w-9/12 mx-auto mt-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-3">What's on your Mind?</h2>
      <Slider {...settings} arrows={true}>
        {itemCategories.map((ele) => {
          const urlParams = new URLSearchParams(ele.entityId.split("?")[1]);

          // Get the values of collection_id and tags
          const collectionId = urlParams.get("collection_id");
          const tags = urlParams.get("tags");

          return (
            <Link key={ele.id} to={"/tags/" + collectionId + "/" + tags}>
              <img className="w-36" src={RES_LOGO_CDN + ele.imageId} />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default ItemCategoriesContainer;
