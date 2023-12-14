import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BestOfferElement from "./BestOfferElement";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BestOffersContainer = () => {
  const bestOffers = useSelector((store) => store.swiggyData.bestOffers);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="text-black mt-3 ">
      <div className="w-9/12 mx-auto shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Best Offers For You</h2>
        <Slider {...settings}>
          {bestOffers.map((ele) => {
            return <BestOfferElement key={ele.id} data={ele} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BestOffersContainer;
