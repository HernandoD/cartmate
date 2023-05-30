import React from "react";
import ReactDOM from "react-dom/client";
import ProductListing from "./components/ProductListing";

import "./assets/stylesheets/index.css";

const App = () => {
  return (
    <ProductListing />
  )
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App());
