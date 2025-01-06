import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';
import { useCart } from '../CartContext';

const Cart = () => {
  // const location = useLocation();
  const {cartItems, removeFromCart} = useCart();

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
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} تومان
                <p>تعداد : {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>حذف</button>
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
