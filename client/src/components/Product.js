import { useState } from "react";
import EditProductForm from "./EditProductForm";
import { deleteProduct } from "../services/productService";
import { addCartItem } from "../services/shoppingCartService";

const Product = ({
  title,
  quantity,
  price,
  pid,
  onUpdateProduct,
  onDeleteProduct,
  onAddCartItem,
}) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">
          <span style={quantity === 0 ? { color: "red" } : {}}>{quantity}</span>{" "}
          left in stock
        </p>
        <div className="actions product-actions">
          <button
            className="add-to-cart"
            disabled={quantity === 0}
            onClick={async () => {
              try {
                onAddCartItem(await addCartItem(pid));
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Add to Cart
          </button>
          <button
            className="edit"
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </button>
        </div>
        <button
          className="delete-button"
          onClick={async () => {
            try {
              await deleteProduct(pid);
              onDeleteProduct(pid);
            } catch (e) {
              console.error(e);
            }
          }}
        >
          <span>X</span>
        </button>
      </div>
      {editMode ? (
        <EditProductForm
          product={{
            quantity,
            price,
            id: pid,
            name: title,
          }}
          onUpdateProduct={onUpdateProduct}
          onCancel={() => {
            setEditMode(false);
          }}
        />
      ) : null}
    </li>
  );
};

export default Product;
