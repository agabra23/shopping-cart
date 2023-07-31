import "../styles/Checkout.css";

export default function Checkout({ cart }) {
  console.log("on checkout render", cart);

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
                    <li key={item.id} className="product-list-item">
                      <img src={item.image} alt={item.title} width="100px" />
                      <div className="product-list-info">
                        <h4>{item.title}</h4>
                        <div className="price-container">
                          <input type="number" className="quantity" value={1} />
                          <h4>${item.price.toFixed(2)}</h4>
                        </div>
                      </div>
                      <button className="remove-item-btn">Remove</button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="checkout-container">
              <h4>Estimated Total: Total</h4>
              <button>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
