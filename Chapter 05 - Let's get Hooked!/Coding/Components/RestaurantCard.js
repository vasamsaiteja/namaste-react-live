import { IMG_CDN_URL } from "../constants";

const RestuarantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
}) => {
  return (
    <div className="card">
      <div className="ImageCardContainer">
        <img src={IMG_CDN_URL + cloudinaryImageId} className="imageCard" />
      </div>
      <div>
        <h2 className="restuarant-heading">{name}</h2>
        <h4 className="cuisines">{cuisines.join(",")}</h4>
        <h4 className="cuisines">{areaName}</h4>
        <span>
          <h4 className="rating">
            <i className="fa-solid fa-star Icon"></i>
            {avgRating}
          </h4>
        </span>
      </div>
    </div>
  );
};

export default RestuarantCard;
