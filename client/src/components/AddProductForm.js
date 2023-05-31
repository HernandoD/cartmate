import { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [formValues, setFormValues] = useState({
    "product-name": '',
    "product-price": '',
    "product-quantity": '',
  });

  const handleFormChange = (e) => {
    const { target } = e;
    let { type, name, value } = target;

    if (type === 'number' && value !== '') {
      value = Number(value);
    }

    setFormValues((prevValues) => {
      const newValues = { ...prevValues };
      newValues[name] = value;
      console.log(newValues);
      return newValues;
    });
  };

  const handleFormSubmit = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        title: formValues['product-name'],
        price: formValues['product-price'],
        quantity: formValues['product-quantity'],
      }
    };

    try { // bookmark here
      const newProduct = await fetch('/api/products', options);
    }
  }

  return (
    <div className="add-form visible">
      <p><button className="add-product-button">Add A Product</button></p>
      <h3>Add Product</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={formValues['product-name']}
            onChange={handleFormChange}
            placeholder='item name'
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
            value={formValues['product-price']}
            onChange={handleFormChange}
            placeholder='number'
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
            value={formValues['product-quantity']}
            onChange={handleFormChange}
            placeholder='number'
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