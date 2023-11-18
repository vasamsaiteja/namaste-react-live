import { useEffect, useState } from "react";
import RestuarantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../constants";
import Shimmer from "./Shimmer";
import NoRestuarantFound from "../Assets/NoRestuarantFound.jpg";
import { Link } from "react-router-dom";

const filterData = (serachInput, restaurants) => {
  return restaurants.filter((item) =>
    item?.info?.name.toLowerCase().includes(serachInput.toLowerCase())
  );
};

const Body = () => {
  const [serachInput, setSearchInput] = useState("");
  const [allRestuarants, setAllRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const checkJsonData = (jsonData) => {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log("checkData", checkData);

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

  if (!allRestuarants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restaurant"
          value={serachInput}
          className="inputField"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(serachInput, allRestuarants);
            console.log(data, "data");
            setFilteredRestuarants(data);
            setErrorMessage("");
            if (data?.length === 0) {
              setErrorMessage("No restuarant found");
            }
          }}
        >
          Search
        </button>
      </div>
      <h2 className="headingStyle">Top restaurant chains in Chennai</h2>
      {errorMessage && (
        <div className="error-container">
          <img src={NoRestuarantFound} className="image-content-restuarant" />
          {serachInput?.length > 0 && `"${serachInput}" ${errorMessage}`}
        </div>
      )}
      {allRestuarants?.length > 0 ? (
        <div className="restaurant-list">
          {filteredRestuarants?.map((resturant) => {
            return (
              <Link
                to={"/restaurant/" + resturant?.info?.id}
                key={resturant?.info?.id}
              >
                <RestuarantCard {...resturant.info} />
              </Link>
            );
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
