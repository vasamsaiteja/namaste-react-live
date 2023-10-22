import FoodVillaLogo from "../Images/foodvilla.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src={FoodVillaLogo} alt="food villa" />
  </a>
);

const Header = () => {
  return (
    <div className="headerContainer">
      <Title />
      <div className="listItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
