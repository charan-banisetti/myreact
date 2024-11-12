import React from 'react';
import '../Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</h3>
    </div>
  );
};

export default Cart;
