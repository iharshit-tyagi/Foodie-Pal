import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addresListByItem } from "./swiggyDataSlice";
const useResListByItem = (collectionid, tags) => {
  const dispatch = useDispatch();
  const Res_By_Item_API =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=" +
    collectionid +
    "&tags==" +
    tags +
    "+&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(Res_By_Item_API);
    const json = await data.json();

    dispatch(addresListByItem(json.data.cards));
  };
};
export default useResListByItem;
