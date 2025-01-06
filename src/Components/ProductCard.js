import React , {useEffect, useState} from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '../CartContext';

  const fetchProductCard = async () => {
    const response = await fetch("https://medicenapp.chbk.app/api/collections/products/records");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  };
  
  const ProductCard = ({ product }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [ProductCard, setProductCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const data = await fetchProductCard();
          setProductCard(data.items);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      getProducts();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
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
