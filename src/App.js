import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
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
  const [user, setUser] = useState({
    name: "saiteja",
    email: "vasamsetti saiteja@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        {/* <Body /> */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
