
// importing the images from the assets folder
import emptyCartImage from '../assets/cart-empty.png';
import fullCartImage from '../assets/cart-full.png';

export default function NavBar({ cartCount }) {
  const isCartEmpty = cartCount === 0;
  const cartIconPath = isCartEmpty ? emptyCartImage : fullCartImage;

  return (
    <div className="NavBar">
      <div className="NavDiv NavUser">Hello, Username</div>
      
      <div className="NavDiv NavTitle">
        <h2>🍎 Groceries App 🍎</h2>  {/* added apple on both sides if that okay :) */}
      </div>

{/* displays the cart image (full or empty) based on cartCount */}
      <div className="NavDiv NavCart">
        <img 
          src={cartIconPath} 
          alt="Shopping Cart"
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}
