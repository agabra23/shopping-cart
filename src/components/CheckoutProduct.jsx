export default function CheckoutProduct({ item, handleQuantityChange }) {
  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      return; // Don't allow invalid quantity values
    }

    handleQuantityChange(item.id, newQuantity);
  };

  return (
    <li className="product-list-item">
      <img src={item.image} alt={item.title} width="100px" />
      <div className="product-list-info">
        <h4>{item.title}</h4>
        <div className="price-container">
          <input
            type="number"
            className="quantity"
            min={1}
            value={item.quantity}
            onChange={handleInputChange}
          />
          <h4>${(item.price * item.quantity).toFixed(2)}</h4>
        </div>
      </div>
      <button className="remove-item-btn">Remove</button>
    </li>
  );
}
