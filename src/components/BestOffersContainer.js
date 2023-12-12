import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BestOfferElement from "./BestOfferElement";
const BestOffersContainer = () => {
  const bestOffers = useSelector((store) => store.swiggyData.bestOffers);
  console.log(bestOffers);
  return (
    <div className="text-black mt-3">
      <h2 className="mx-12 text-2xl font-semibold">Best Offers For You</h2>
      <div className="flex mt-3 w-3/4 overflow-x-scroll mx-auto gap-2">
        {bestOffers.map((ele) => {
          return <BestOfferElement key={ele.id} data={ele} />;
        })}
      </div>
    </div>
  );
};

export default BestOffersContainer;
