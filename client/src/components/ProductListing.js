import sampleProducts from  "../../mockData/data.js"
import Product from "./Product";

const ProductListing = () => {
  const productElements = sampleProducts.map(({ id, title, quantity, price }) => {
    return ( 
     <Product 
       key={id} 
       title={title} 
       quantity={quantity} 
       price={price} 
      />
    )
  });

  return (    
  <div className='product-listing'>
    <h2>Products</h2>
    <ul className="product-list">
      {productElements}
    </ul>
  </div>
  )
};

export default ProductListing;

