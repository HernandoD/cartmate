import React from "react";
import ReactDOM from "react-dom/client";
import ProductListing from "./components/ProductListing";
import AddProductForm from "./components/AddProductForm";

import "./assets/stylesheets/index.css";

const App = () => {
  return (
    <>
      <ProductListing />
      <AddProductForm />
    </>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App());
