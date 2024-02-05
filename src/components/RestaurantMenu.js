import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../constants";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantMenu, menuItems] = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurantMenu || menuItems.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="resturant-top-container">
      <div className="border-solid  flex bg-black justify-center m-2">
        <img
          src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
          alt={restaurantMenu?.name}
          className="resturant-image p-4 w-52 h-40 self-center"
        />
        <div className="resturant-summary-details text-white font-bold self-center">
          <h2 className="resturant-heading">{restaurantMenu?.name}</h2>
          <p className="resturant-cuisine-list">
            {restaurantMenu?.cuisines?.join(",")}
          </p>
          <p className="resturant-cuisine-list">{restaurantMenu?.areaName}</p>
          <div className="resturant-details-container flex">
            <div>
              <i className="fa-solid fa-star" style={{ color: "green" }}></i>
              <span>{restaurantMenu?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurantMenu?.sla?.lastMileTravelString}</div>
            <div>|</div>
            <div>{restaurantMenu?.sla?.slaString}</div>
          </div>
        </div>
      </div>
      <div className="resturant-menu-container">
        <div className="resturant-menu-items-inner-container flex flex-col">
          <div className="self-center  p-2">
            <h1 className="font-bold text-xl">
              Recommended({menuItems.length})
            </h1>
          </div>
          <div className="menu-item-list self-center">
            {menuItems.map((item) => (
              <div
                key={item?.id}
                className="menu-item flex justify-between border-b-2 border-slate-200 p-2"
              >
                <div className="menu-item-details self-center">
                  <h2 className="font-bold">{item?.name}</h2>
                  <p className="menu-paragraph">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="menu-description text-slate-400">
                    {item?.description}
                  </p>
                </div>
                <div>
                  <img
                    src={ITEM_IMG_CDN_URL + item?.imageId}
                    className="w-52 h-40"
                  />
                  <div className="buttonBorder p-2 text-center w-50 ">
                    <button
                      className="bg-black text-white p-2 rounded-md text-md"
                      onClick={() => addFoodItem(item)}
                    >
                      ADD +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
