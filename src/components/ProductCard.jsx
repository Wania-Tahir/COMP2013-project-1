import { useState } from 'react';
import QuantityCounter from './QuantityCounter';

export default function ProductCard({ product, onAddToCart }) {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  
  function handleAdd() {
    // makes sure the user enters a quantity greater than 0
    if (selectedQuantity <= 0) {
      alert("Enter quantity before adding to cart");
      return;
    }
    
    onAddToCart(product, selectedQuantity);
    
    // resets the counter to 0 after adding the item :D
    setSelectedQuantity(0);
  }

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} style={{ height: '100px' }} />
      <h3>{product.productName}</h3>
      <p style={{ fontSize: '12px', color: 'gray' }}>{product.brand}</p> 
      <p>{product.quantity} - {product.price}</p> 
      
      <QuantityCounter 
        quantity={selectedQuantity} 
        setQuantity={setSelectedQuantity} 
        min={0}
      />
      
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
