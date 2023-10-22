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
