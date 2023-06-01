import { useState } from "react";
import { addProduct } from "../services/productService";

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const resetForm = () => {
    setName("");
    setPrice("");
    setQuantity("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      title: name,
      price: Number(price),
      quantity: Number(quantity),
    };

    try {
      onAddProduct(await addProduct(productData));
      resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="add-form visible">
      <p>
        <button className="add-product-button">Add A Product</button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="item name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="number"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            placeholder="number"
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
