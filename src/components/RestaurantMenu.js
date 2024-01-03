import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../constants";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantMenu, menuItems] = useRestaurant(resId);
  return !restaurantMenu || menuItems.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="resturant-top-container">
      <div className="resturant-summary-container">
        <img
          src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
          alt={restaurantMenu?.name}
          className="resturant-image"
        />
        <div className="resturant-summary-details">
          <h2 className="resturant-heading">{restaurantMenu?.name}</h2>
          <p className="resturant-cuisine-list">
            {restaurantMenu?.cuisines?.join(",")}
          </p>
          <p className="resturant-cuisine-list">{restaurantMenu?.areaName}</p>
          <div className="resturant-details-container">
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
        <div className="resturant-menu-items-inner-container">
          <div>
            <h1 className="resturant-menu-recommended-items">
              Recommended({menuItems.length})
            </h1>
          </div>
          <div className="menu-item-list">
            {menuItems.map((item) => (
              <div key={item?.id} className="menu-item">
                <div className="menu-item-details">
                  <h2 className="menu-heading">{item?.name}</h2>
                  <p className="menu-paragraph">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="menu-description">{item?.description}</p>
                </div>
                <div>
                  <img src={ITEM_IMG_CDN_URL + item?.imageId} />
                  <div className="buttonBorder">
                    <button className="add-button">ADD +</button>
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
