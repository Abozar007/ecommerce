import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const cartItems = location.state?.cart || [];

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>سبد خرید</h2>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>سبد خرید شما خالی است.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} تومان
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-footer">
        <button className="btn-checkout">پرداخت</button>
      </div>
    </div>
  );
};

export default Cart;
