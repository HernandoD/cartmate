import Product from "./Product";

const ProductListing = ({
  products,
  onUpdateProduct,
  onDeleteProduct,
  onAddCartItem,
}) => {
  const productElements = products.map(({ _id, title, quantity, price }) => {
    return (
      <Product
        key={_id}
        title={title}
        quantity={quantity}
        price={price}
        pid={_id}
        onUpdateProduct={onUpdateProduct}
        onDeleteProduct={onDeleteProduct}
        onAddCartItem={onAddCartItem}
      />
    );
  });

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">{productElements}</ul>
    </div>
  );
};

export default ProductListing;
