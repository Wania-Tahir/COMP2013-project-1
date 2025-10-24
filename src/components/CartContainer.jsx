import CartCard from "./CartCard";

export default function CartContainer({ cart, onUpdateQuantity, onRemove, onEmpty, total }) {
  const formattedTotal = total.toFixed(2);

  return (
    <div className="CartContainer">
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="CartList">
            {cart.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>
          
          <div className="CartListBtns">
            <button className="RemoveButton" onClick={onEmpty}>
              Empty Cart
            </button>
            <button id="BuyButton">
              Checkout: ${formattedTotal} 
            </button>
          </div>
        </>
      )}
    </div>
  );
}




