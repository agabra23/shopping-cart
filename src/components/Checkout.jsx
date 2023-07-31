import { useEffect, useState } from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

export default function Checkout({ cart, handleQuantityChange }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => {
      return item.price * item.quantity + total;
    }, 0);

    setTotal(totalPrice);
  };

  if (!cart || cart.length === 0) return <h2>Cart is Empty</h2>;
  return (
    <>
      <div className="checkout-main-wrapper">
        {cart.length === 0 ? (
          <h2>Cart is empty.</h2>
        ) : (
          <>
            <div className="left-container">
              <div className="cart-heading">
                <h4>Shopping Cart</h4>
                {cart.length === 1 ? (
                  <h4>1 item</h4>
                ) : (
                  <h4>{cart.length} items</h4>
                )}
              </div>
              <ul className="checkout-product-list">
                {cart.map((item) => {
                  return (
                    <CheckoutProduct
                      key={item.id}
                      item={item}
                      handleQuantityChange={handleQuantityChange}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="checkout-container">
              <h4>Estimated Total: ${total.toFixed(2)}</h4>
              <button>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
