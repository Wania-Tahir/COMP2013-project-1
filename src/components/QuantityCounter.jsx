export default function QuantityCounter({ quantity, setQuantity, min = 0 }) {
  
  function decreaseQuantity() {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="ProductQuantityDiv">
      <div className="QuantityBtn" onClick={decreaseQuantity}>-</div>
      <div className="qty-value">{quantity}</div>
      <div className="QuantityBtn" onClick={increaseQuantity}>+</div>
    </div>
  );
}