import FoodVillaLogo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={FoodVillaLogo} alt="food villa" />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-100 shadow-lg">
      <Title />
      <div className="listItems">
        <ul className="flex py-12">
          <li className="px-2 ">
            <Link to="/" className="font-bold">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="font-bold">
              About
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact" className="font-bold">
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link to="/instamart" className="font-bold">
              Instamart
            </Link>
          </li>
          <li className="px-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
