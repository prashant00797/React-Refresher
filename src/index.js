import React from "react";
import { createRoot } from "react-dom/client";
// import AppComponent from "./App"; // i am able to change the name since it was a default export
import App from "./App"; // normal import
import Card from "./components/Card";
//router imports
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPath from "./components/Error";
import DynamicCard from "./components/DynamicCard";
import { Dummy } from "./components/Dummy";

//creating routing tree
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPath />,
    children: [
      {
        index: true,
        element: <Card />,
      },
      {
        path: "deals",
        element: (
          <div
            style={{
              backgroundColor: "red",
              width: "100px",
              height: "100px",
            }}
          ></div>
        ),
      },
      {
        path: "wishlist",
        element: (
          <div
            style={{
              backgroundColor: "blueviolet",
              width: "100px",
              height: "100px",
            }}
          >
            Wishlist
          </div>
        ),
      },
      {
        path: "account",
        element: (
          <div
            style={{
              backgroundColor: "grey",
              width: "100px",
              height: "100px",
            }}
          >
            Account
          </div>
        ),
      },
      {
        path: "/listRestaurantMenu/:id",
        element: <DynamicCard />,
      },
      {
        path: "/about",
        element: <Dummy />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}></RouterProvider>);
