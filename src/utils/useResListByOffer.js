import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addResListByOffer } from "./swiggyDataSlice";
const useResListByOffer = (collectionid) => {
  const dispatch = useDispatch();
  const Res_By_Item_API =
    "https://corsproxy.org/?" +
    encodeURIComponent(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=" +
        collectionid +
        "+&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(Res_By_Item_API);
    const json = await data.json();

    dispatch(addResListByOffer(json.data.cards));
  };
};
export default useResListByOffer;
