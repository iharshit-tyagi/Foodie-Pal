import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BestOfferElement from "./BestOfferElement";
import { Link } from "react-router-dom";
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
  console.log(bestOffers);
  return (
    <div className="text-black mt-3 ">
      <div className="w-9/12 mx-auto shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Best Offers For You</h2>
        <Slider {...settings}>
          {bestOffers.map((ele) => {
            const urlParams = new URLSearchParams(
              ele.action.link.split("?")[1]
            );

            // Get the values of collection_id and tags
            const collectionId = urlParams.get("collection_id");
            // const tags = urlParams.get("tags");

            return (
              <Link
                key={ele.id}
                to={"/tags/" + collectionId + "/offer"}
                // onClick={handleCardClick}
              >
                <BestOfferElement key={ele.id} data={ele} />{" "}
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BestOffersContainer;
