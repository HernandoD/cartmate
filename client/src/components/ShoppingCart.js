import { checkoutCart } from "../services/shoppingCartService";

const ShoppingCart = ({ cartItems, onCheckoutCart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
            <button className="checkout" disabled>
              Checkout
            </button>
          </>
        ) : (
          <>
            <table className="cart-items">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ _id, price, quantity, title }) => (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="total">
                    Total: $
                    {cartItems
                      .reduce(
                        (sum, { price, quantity }) => sum + price * quantity,
                        0
                      )
                      .toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="checkout-button">
              <button
                className="checkout"
                onClick={async () => {
                  try {
                    await checkoutCart();
                    onCheckoutCart();
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
export default ShoppingCart;
