import QuantityCounter from './QuantityCounter';

function parsePrice(priceString) {
  return parseFloat(priceString.replace('$', '')) || 0.00;
}

export default function CartCard({ item, onUpdateQuantity, onRemove }) {
  const price = parsePrice(item.price);
  const subtotal = (price * item.quantity).toFixed(2);

  function setQuantity(newQuantity) {
    // stps the quantity from dropping below 1 in the cart
    if (newQuantity < 1) {
      return; 
    }
    onUpdateQuantity(item.id, newQuantity);
  }

  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <img src={item.image} alt={item.productName} style={{ height: '50px' }} />
        <div>
          <h4>{item.productName}</h4>
          <p>Subtotal: ${subtotal}</p>
        </div>
      </div>
      
      <QuantityCounter 
        quantity={item.quantity} 
        setQuantity={setQuantity} 
        min={1} 
      />

      <button className="RemoveButton" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}

