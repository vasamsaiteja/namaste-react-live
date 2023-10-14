import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

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
