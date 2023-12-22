import React from "react";
import useResListByOffer from "../utils/useResListByOffer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
const BestOffersResList = () => {
  const params = useParams();

  const { collectionid } = params;
  useResListByOffer(collectionid);
  const resListByOffer = useSelector(
    (store) => store.swiggyData.resListByOffer
  );

  const resList = resListByOffer.filter((ele) => {
    return (
      ele.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
  });
  return resList.length === 0 ? (
    <div className="">
      <Shimmer />
    </div>
  ) : (
    <div className=" mx-auto">
      <div className=" mx-12 mt-4 mb-4  ">
        <h2 className="text-4xl text-black font-semibold ">
          {resListByOffer[0]?.card?.card?.title}
        </h2>
      </div>

      <div className=" grid grid-cols-4 px-9 gap-4">
        {resList.map((ele) => {
          return (
            <Link
              to={"/restaurants/" + ele.card.card.info.id}
              className="res-menu-link"
              key={ele.card.card.info.id}
            >
              <RestaurantCard resObj={ele.card.card} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BestOffersResList;
