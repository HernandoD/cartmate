import { useState, useEffect } from 'react';
import Product from "./Product";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const options = {
        method: 'GET',
      };

      const response = await fetch('/api/products', options);

      setProducts(await response.json());
      console.log(products);
    };

    getProducts();
  }, []);

  const productElements = products.map(({ _id, title, quantity, price }) => {
    return ( 
     <Product 
       key={_id} 
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

