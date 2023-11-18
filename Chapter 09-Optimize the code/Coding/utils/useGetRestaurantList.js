import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../constants";

const useGetResturantList = () => {
  const [allRestuarants, setAllRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const checkJsonData = (jsonData) => {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (checkData !== undefined) {
        return checkData;
      }
    }
  };

  const getRestaurants = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const json = await response.json();

      const responseData = await checkJsonData(json);
      setAllRestuarants(responseData);
      setFilteredRestuarants(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  return [allRestuarants, filteredRestuarants, setFilteredRestuarants];
  //return array of values.
};

export default useGetResturantList;
