import { createRoot } from "react-dom/client";
import AppComponent from "./App"; // i am able to change the name since it was a default export
import App from "./App"; // normal import
import React from "react";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
);
