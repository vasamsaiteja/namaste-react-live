import { useContext } from "react";
import FoodVillaLogo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={FoodVillaLogo} alt="food villa" />
  </a>
);

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg">
      <Title />
      <h1 className="p-10 m-2 font-bold text-xl text-center">{user.name}</h1>
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
