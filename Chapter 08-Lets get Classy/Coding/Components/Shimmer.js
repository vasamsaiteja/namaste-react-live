import { shimmer_menu_card_unit } from "../constants";

const CardShimmer = () => {
  const divStyle = {
    height: "200px",
  };

  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate" style={divStyle}>
        <div className="shimmerImageCardContainer stroke animate">
          <div className="shimmerImageCard stroke animate"></div>
        </div>
      </div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="resturant-top-container">
      <div className="resturant-summary-container stroke-color animate">
        <img className="shimmer-imag stroke animate" />
        <div className="resturant-summary-details">
          <h2 className="shimmer-w40 stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60 stroke animate"></div>
        </div>
      </div>
      <div className="resturant-menu-container">
        <div className="resturant-menu-items-inner-container">
          <div>
            <h1 className="shimmer-w40 stroke animate"></h1>
          </div>
          <div className="menu-item-list">
            {Array(shimmer_menu_card_unit)
              .fill("")
              .map((element, index) => (
                <div className="shimmer-menu-card" key={index}>
                  <div className="shimmer-item-details">
                    <h3 className="shimmer-w40  stroke animate"></h3>
                    <p className="shimmer-w20  stroke animate"> </p>
                    <p className="shimmer-w60  stroke animate"></p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <img className="shimmer-img stroke animate" />
                    <div className="shimmer-btn stroke animate"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(20).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
