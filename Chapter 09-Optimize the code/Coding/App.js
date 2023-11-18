import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/ContactUs";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
// import Instamart from "./Components/Instamart";

const About = lazy(() => import("./Components/About"));
const Instamart = lazy(() => import("./Components/Instamart"));

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
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
