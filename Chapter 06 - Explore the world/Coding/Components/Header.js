import FoodVillaLogo from "../Images/foodvilla.png";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
