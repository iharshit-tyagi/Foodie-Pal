import React from "react";
import { useSelector } from "react-redux";
import { RES_LOGO_CDN } from "../utils/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
  return (
    <div className="w-9/12 mx-auto mt-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-3">What's on your Mind?</h2>
      <Slider {...settings}>
        {itemCategories.map((ele) => {
          return (
            <img
              className="w-36"
              key={ele.id}
              src={RES_LOGO_CDN + ele.imageId}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ItemCategoriesContainer;
