import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.productcard}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>تومان {product.price}</strong></p>
      <button onClick={() => addToCart(product)}>اضافه به سبد خرید</button>
    </div>
  );
};

export default ProductCard;
