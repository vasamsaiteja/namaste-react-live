import React from "react";
import ReactDOM from "react-dom/client";
import FoodVillaLogo from "../Coding/Images/foodvilla.png";

// My food app structure will look like
/*
1) Header
  -Logo 
  -Nav items(right side)
  -cart 
2) Body 
  -search bar 
  -restuarnt List 
  -restuarnt card 
   -image 
   -Name
   -Rating 
3) Footer 
  -links 
  -copyrights
*/

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

const Body = () => (
  <h1 className="heading"> Hey saiteja lets order some food.</h1>
);

const Footer = () => {
  return (
    <div className="footerContainer">
      Written and directed By
      <i class="fa-solid fa-film"></i>
      <a href="https://www.linkedin.com/in/vasamsaiteja/" target="_blank">
        Vasam saiteja
      </a>
      <i class="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Villa</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
