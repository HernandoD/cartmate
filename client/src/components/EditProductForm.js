import { useState } from "react";
import { updateProduct } from "../services/productService";

const EditProductForm = ({ onUpdateProduct, product, onCancel }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      price: Number(price),
      quantity: Number(quantity),
      name,
      id: product.id,
    };

    try {
      onUpdateProduct(await updateProduct(productData));
      onCancel();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={name}
            aria-label="Product Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            aria-label="Product Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            aria-label="Product Quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
