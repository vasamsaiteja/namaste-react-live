import { useState } from "react";
import { restaurantList } from "../constants";
import RestuarantCard from "./RestaurantCard";

const filterData = (serachInput, restaurants) => {
  if (serachInput.length > 0) {
    return restaurants.filter((item) => item.info.name === serachInput);
  } else {
    return restaurantList;
  }
};

const Body = () => {
  const [serachInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
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
            const data = filterData(serachInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <h1>{serachInput}</h1>
      <h2 className="headingStyle">Top restaurant chains in Chennai</h2>
      <div className="restaurant-list">
        {restaurants.map((resturant) => (
          <RestuarantCard key={resturant.info.id} {...resturant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
