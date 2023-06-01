const BASE_URL = "/api/products";

const getProducts = async () => {
  const options = {
    method: "GET",
  };

  const response = await fetch(BASE_URL, options);
  return response.json();
};

const addProduct = async (product) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  };

  const response = await fetch(BASE_URL, options);
  return response.json();
};

const updateProduct = async (product) => {
  const { name, price, quantity, id } = product;

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      price,
      quantity,
      title: name,
    }),
  };

  const response = await fetch(BASE_URL + `/${id}`, options);
  return response.json();
};

const deleteProduct = async (id) => {
  const response = await fetch(BASE_URL + `/${id}`, { method: "DELETE" });
  await response.text();
  return response.ok;
};

export { getProducts, addProduct, updateProduct, deleteProduct };
