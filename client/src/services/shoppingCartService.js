const BASE_URL = "/api/";
const getCartItems = async () => {
  const options = {
    method: "GET",
  };

  const response = await fetch(BASE_URL + "cart", options);
  return response.json();
};

const addCartItem = async (productId) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  };

  const response = await fetch(BASE_URL + "add-to-cart", options);
  return response.json();
};

const checkoutCart = async () => {
  const options = {
    method: "POST",
  };

  return await fetch(BASE_URL + "checkout", options);
};

export { getCartItems, addCartItem, checkoutCart };
