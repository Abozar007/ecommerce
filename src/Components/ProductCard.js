import React , {useState} from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null); 

  return (
    <div className={styles.productcard} onMouseEnter={() => setHoveredProduct(product.id)} 
    onMouseLeave={() => setHoveredProduct(null)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>تومان {product.price}</strong></p>
      {hoveredProduct === product.id && (
        <div className={styles.tooltip}>
          <p>{product.properties}</p>
        </div>
      )}
      <button onClick={() => addToCart(product)}>اضافه به سبد خرید</button>
    </div>
  );
};

export default ProductCard;
