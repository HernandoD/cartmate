import Product from "./Product";

const ProductListing = ({ products, onUpdateProduct, onDeleteProduct }) => {
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
