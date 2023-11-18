import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, SWIGGY_MENU_API_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    try {
      const data = await fetch(SWIGGY_MENU_API_URL + resId);
      const jsonData = await data.json();
      const restuarantData = jsonData?.data?.cards?.map((card) => card.card);
      const filteredData = restuarantData.find((each) => each?.card?.info);
      setRestaurantMenu(filteredData.card.info);

      const menuItemsList = jsonData?.data?.cards
        ?.find((card) => card.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (item) => item.card?.card
        );
      const filteredItems =
        menuItemsList
          .filter((item) => item["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((item) => item.itemCards)
          .flat()
          ?.map((item) => item?.card?.info) || [];

      setMenuItems(filteredItems);
    } catch (error) {
      console.log(error, "error");
    }
  };
  return [restaurantMenu, menuItems];
};

export default useRestaurant;
