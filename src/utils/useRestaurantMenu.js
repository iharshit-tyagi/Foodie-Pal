import { useEffect, useState } from "react";
import { RES_MENU_API_URL } from "./constants";
const useRestaurantMenu = (resID) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_MENU_API_URL + resID);
    const json = await data.json();
    setresInfo(json?.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
