import Logo from "../Assets/aboutFood.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us-page-container">
      <div className="about-content-container">
        <div className="about-food-content">
          <h1>
            Welcome to the tasty authentic Indian food
            <br /> which feels like having home food here itself.
          </h1>
          <h2>Welcome to the family of food villa.</h2>
        </div>
        <div>
          <h1>
            If you want more information about <br /> the food application
            connect me with.
          </h1>
          <div className="anchor-card">
            <a href="https://github.com/vasamsaiteja" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vasamsaiteja/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/vasamsaiteja" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <Link to="/">
          <div className="button-container">
            <button className="button-style">Back to Home</button>
          </div>
        </Link>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/saiteja68/image/upload/v1697821585/6054b25e2ed3214f733a604a_1616163422206_si8kmq.jpg"
          alt="About Food"
          className="image-card"
        />
      </div>
    </div>
  );
};

export default About;
