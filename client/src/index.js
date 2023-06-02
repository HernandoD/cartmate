import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ProductListing from "./components/ProductListing";
import AddProductForm from "./components/AddProductForm";
import { getProducts } from "./services/productService";
import ShoppingCart from "./components/ShoppingCart";
import { getCartItems } from "./services/shoppingCartService";

import "./assets/stylesheets/index.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

    (async () => {
      const cartItemList = await getCartItems();
      setCartItems(cartItemList);
    })();
  }, []);

  const handleAddCartItem = ({ product, item }) => {
    handleUpdateProduct(product);

    if (cartItems.some((cartItem) => cartItem._id === item._id)) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id ? item : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleCheckoutCart = () => {
    setCartItems([]);
  };

  return (
    <main>
      <ShoppingCart cartItems={cartItems} onCheckoutCart={handleCheckoutCart} />
      <ProductListing
        products={products}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        onAddCartItem={handleAddCartItem}
      />
      <AddProductForm onAddProduct={handleAddProduct} />
    </main>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
