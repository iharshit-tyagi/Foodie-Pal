import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RES_LOGO_CDN } from "../utils/constants";
import NextArrow from "./arrows/NextArrow";
import PrevArrow from "./arrows/PrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const ItemCategoriesContainer = () => {
  const [isSliding, setIsSliding] = useState(false);
  const itemCategories = useSelector(
    (store) => store.swiggyData.itemCategories
  );

  const handleCardClick = (e) => {
    if (isSliding) {
      e.preventDefault();
    }
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    beforeChange: () => setIsSliding(true),
    afterChange: () => setIsSliding(false),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-9/12 mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-3">What's on your Mind?</h2>
      <Slider {...settings} arrows={true}>
        {itemCategories.map((ele) => {
          const urlParams = new URLSearchParams(ele.action.link.split("?")[1]);

          // Get the values of collection_id and tags
          const collectionId = urlParams.get("collection_id");
          const tags = urlParams.get("tags");
          console.log(ele, collectionId);

          return (
            <Link
              key={ele.id}
              to={"/tags/" + collectionId}
              onClick={handleCardClick}
            >
              <img className="w-36" src={RES_LOGO_CDN + ele.imageId} />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default ItemCategoriesContainer;
