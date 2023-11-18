import { useRouteError, Link } from "react-router-dom";
import ErrorImage from "../Assets/saitejaPageNotfound.jpg";

const Error = () => {
  const err = useRouteError();
  console.log(err, "err");
  return (
    <div className="error-container">
      <div className="image-box-container">
        <img src={ErrorImage} alt="ErrorImage" className="image-content" />
      </div>
      <div className="text-container">
        <h1 className="error-heading">
          Oops! The path you're looking for can't be found.
        </h1>
        <h2 className="error-data-heading">{err.data}</h2>
        <Link to="/">
          <button className="err-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
