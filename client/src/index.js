import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ProductListing from "./components/ProductListing";
import AddProductForm from "./components/AddProductForm";
import { getProducts } from "./services/productService";

import "./assets/stylesheets/index.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) => {
        if (product._id === updatedProduct._id) {
          return updatedProduct;
        }
        return product;
      })
    );
  };

  const handleDeleteProduct = (pid) => {
    setProducts(products.filter((product) => product._id !== pid));
  };

  useEffect(() => {
    (async () => {
      const productsList = await getProducts();
      setProducts(productsList);
    })();
  }, []);

  return (
    <>
      <ProductListing
        products={products}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
      />
      <AddProductForm onAddProduct={handleAddProduct} />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
