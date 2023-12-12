import React from "react";
import { useSelector } from "react-redux";
import { RES_LOGO_CDN } from "../utils/constants";
const ItemCategoriesContainer = () => {
  const itemCategories = useSelector(
    (store) => store.swiggyData.itemCategories
  );
  console.log(itemCategories);
  return (
    <div className="flex mt-3 w-3/4 overflow-x-scroll mx-auto">
      {itemCategories.map((ele) => {
        return (
          <img className="w-36" key={ele.id} src={RES_LOGO_CDN + ele.imageId} />
        );
      })}
    </div>
  );
};

export default ItemCategoriesContainer;
