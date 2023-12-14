import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addresListByItem, clearResListByItem } from "../utils/swiggyDataSlice";
import { useDispatch, useSelector } from "react-redux";
import useResListByItem from "../utils/useResListByItem";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_LOGO_CDN } from "../utils/constants";
const ResContainerByItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { collectionid, tags } = params;
  useResListByItem(collectionid, tags); //To get the resList
  const resListByItem = useSelector((store) => store.swiggyData.resListByItem);
  //   console.log(resListByItem); //Initially this will null

  const resList = resListByItem.filter((ele) => {
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
      <div className=" mx-12 mt-4 mb-4 relative  ">
        <div className="absolute top-4 left-3  ">
          <h2 className="text-5xl text-white font-semibold ">
            {resListByItem[0]?.card?.card?.title}
          </h2>
          <p className="text-xl text-white ">
            {resListByItem[0]?.card?.card?.description}
          </p>
        </div>
        <img
          className=" "
          src={RES_LOGO_CDN + resListByItem[0]?.card?.card?.imageId}
        />
      </div>
      <h2 className="mx-16 text-3xl font-semibold">Restaurants To Explore </h2>
      <div className=" grid grid-cols-5 px-9 gap-4">
        {resList.map((ele) => {
          return (
            <Link
              to={"/restaurants/" + ele.card.card.info.id}
              className="res-menu-link"
              key={ele.card.card.info.id}
            >
              <RestaurantCard resObj={ele.card.card} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResContainerByItem;
