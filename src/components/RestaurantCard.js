import { IMG_CDN_URL } from "../constants";

const RestuarantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-50">
      <div className="ImageCardContainer">
        <img src={IMG_CDN_URL + cloudinaryImageId} className="imageCard" />
      </div>
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <h4 className="font-medium text-wrap break-all  mb-3 text-gray-500 dark:text-gray-400">
          {cuisines.join(",")}
        </h4>
        <h4 className="cuisines">{areaName}</h4>
        <span>
          <h4 className="rating">
            <i className="fa-solid fa-star" style={{ color: "green" }}></i>
            {avgRating}
          </h4>
        </span>
      </div>
    </div>
  );
};

export default RestuarantCard;
