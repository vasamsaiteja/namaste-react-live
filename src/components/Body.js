import { useContext, useState } from "react";
import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoRestuarantFound from "../assets/img/NoRestuarantFound.jpg";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetResturantList from "../utils/useGetRestaurantList";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [serachInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [allRestuarants, filteredRestuarants, setFilteredRestuarants] =
    useGetResturantList();

  const online = useOnline();

  if (!online) {
    return (
      <h1 className="offlineHeading">
        <span className="redBullet">•</span> Offline, please check your internet
        connection.
      </h1>
    );
  }

  if (!allRestuarants) return null;

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="search-container p-5 bg-gray-50 my-2">
        <input
          type="text"
          placeholder="Search Restaurant"
          value={serachInput}
          className="inputField border-2 border-gray-200"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-button p-2 m-3 bg-black hover:bg-gray-500 text-white rounded-lg"
          onClick={() => {
            const data = filterData(serachInput, allRestuarants);
            setFilteredRestuarants(data);
            setErrorMessage("");
            if (data?.length === 0) {
              setErrorMessage("No restuarant found");
            }
          }}
        >
          Search
        </button>
        <input
          className="border-2 border-gray-200"
          placeholder="Enter User Name"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <h2 className="text-xl font-bold text-center">
        Top restaurant chains in Chennai
      </h2>
      {errorMessage && (
        <div className="error-container">
          <img src={NoRestuarantFound} className="image-content-restuarant" />
          {serachInput?.length > 0 && `"${serachInput}" ${errorMessage}`}
        </div>
      )}
      {allRestuarants?.length > 0 ? (
        <div className="flex flex-wrap justify-center">
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
