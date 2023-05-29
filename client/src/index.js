import React from "react";
import ReactDOM from "react-dom/client";
import sampleProducts from "../mockData/data";
import "./assets/stylesheets/index.css";

const Product = ({ title, quantity, price }) => {
  return React.createElement(
    "li",
    { className: "product" },
    React.createElement(
      "div",
      { className: "product-details" },
      React.createElement("h3", {}, title),
      React.createElement("p", { className: "price" }, price),
      React.createElement(
        "p",
        { className: "quantity" },
        `${quantity} left in stock`
      ),
      React.createElement(
        "div",
        { className: "actions product-actions" },
        React.createElement(
          "button",
          { className: "add-to-cart" },
          "Add to Cart"
        ),
        React.createElement("button", { className: "edit" }, "Edit")
      ),
      React.createElement(
        "button",
        { className: "delete-button" },
        React.createElement("span", {}, "X")
      )
    )
  );
};

const ProductListing = ({ products }) => {
  const productElements = products.map(({ id, title, quantity, price }) => {
    return React.createElement(Product, { key: id, title, quantity, price });
  });
  return React.createElement(
    "ul",
    { className: "product-list" },
    ...productElements
  );
};

const App = () => {
  return React.createElement(
    "div",
    { className: "product-listing" },
    React.createElement("h2", {}, "Products"),
    React.createElement(ProductListing, { products: sampleProducts })
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App());
