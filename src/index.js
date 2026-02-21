import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import AppComponent from "./App"; // i am able to change the name since it was a default export
import App from "./App"; // normal import

//router imports
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPath from "./components/Error";
// import DynamicCard from "./components/DynamicCard";
import { Dummy } from "./components/Dummy";
import TailwindContainer from "./components/TailwindContainer";

//importing index.css for tailwind
import "./index.css";
import CardBody from "./components/CardBody";
import Shimmer from "./components/Shimmer";

//lazy loading a component
const LazyDynamicCard = lazy(() => import("./components/DynamicCard"));

//creating routing tree
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPath />,
    children: [
      {
        index: true,
        element: <CardBody />,
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
          <div>
            <TailwindContainer /> {/* Testing tailwind in these route */}
          </div>
        ),
      },
      {
        path: "listRestaurantMenu/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LazyDynamicCard />
          </Suspense>
        ),
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
