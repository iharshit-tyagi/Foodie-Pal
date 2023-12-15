import React from "react";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RES_LOGO_CDN } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
export const TopResChains = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  const topRestChains = useSelector(
    (store) => store.swiggyData.topRestaurantChains
  );
  // console.log(topRestChains);
  return (
    <div className="w-9/12 mx-auto mt-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-3">Top Restaurant Chains</h2>
      <Slider {...settings}>
        {topRestChains.map((ele) => {
          return (
            <Link
              to={"/restaurants/" + ele.info.id}
              className="res-menu-link"
              key={ele.info.id}
            >
              <div className="hover:scale-90 scale-95 transition-transform">
                <RestaurantCard resObj={ele} />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};
