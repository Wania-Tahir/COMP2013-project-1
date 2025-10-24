import { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";


function parsePrice(priceString) {
  return parseFloat(priceString.replace('$', '')) || 0.00;
}

export default function GroceriesAppContainer({ products }) {
  // holds all the items that are currently in shopping cart
    const [cart, setCart] = useState([]);

    // addds items from the productCard to the cart
  function handleAddToCart(product, quantityToAdd) {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + quantityToAdd,
        };
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity: quantityToAdd }];
      }
    });
  }

  function handleUpdateQuantity(id, newQuantity) {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  }

  // removes a single item from the cart
  function handleRemoveFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  // clearsr the entire shopping cart
  function handleEmptyCart() {
    setCart([]);
  }

  // calculates thetotal for all items in the cart
  const cartTotal = cart.reduce((total, item) => {
    const subtotal = parsePrice(item.price) * item.quantity;
    return total + subtotal;
  }, 0);

  const cartItemCount = cart.length;

  return (
    <>
      <NavBar cartCount={cartItemCount} />
      
      <div style={{ padding: "5px 20px", background: "rgb(76, 43, 226)", color: "white", textAlign: "center", marginBottom: "10px" }}>
        Items in Cart: {cartItemCount}
      </div>

      <div className="GroceriesApp-Container">
        <ProductsContainer 
          products={products}
          onAddToCart={handleAddToCart}
        />
        <CartContainer
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveFromCart}
          onEmpty={handleEmptyCart}
          total={cartTotal}
        />
      </div>
    </>
  );
}






