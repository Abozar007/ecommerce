import React, { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './Home.module.css';

import img1 from '../image/3.jpg';
import img2 from '../image/5.webp';
import img3 from '../image/6.jpeg';
import img4 from '../image/zaf.jpg';
import img5 from '../image/zer1.jpg';
import img6 from '../image/zer2.jpg';
import img7 from '../image/zaf2.webp';
import img8 from '../image/anab1.jpg';

const productList = [
  { id: 1, name: 'زرشک تازه دون شده', category: 'زرشک', description: 'کیلویی', price: '130,000', image: img1 },
  { id: 2, name: 'زرشک شاخه', category: 'زرشک', description: 'کیلویی', price: '110,000', image: img6 },
  { id: 3, name: 'زرشک پفکی', category: 'زرشک', description: 'کیلویی', price: '180,000', image: img5 },
  { id: 4, name: 'آب زرشک تازه', category: 'زرشک', description: '1.5 لیتری', price: '110,000', image: img2 },
  { id: 5, name: 'آب زرشک تازه', category: 'زرشک', description: '1 لیتری', price: '90,000', image: img3 },
  { id: 6, name: 'زعفران نگین', category: 'زعفران', description: 'مثقال', price: '380,000', image: img4 },
  { id: 7, name: 'زعفران گل', category: 'زعفران', description: 'کیلویی', price: '850,000', image: img7 },
  { id: 8, name: 'عناب تازه', category: 'عناب', description: 'کیلویی', price: '80,000', image: img8 },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const filteredProducts = productList.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) || searchTerm === '';
    const matchesCategory =
      selectedCategory === 'همه' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.homecontainer}>
      <div className={styles.banner}>
        <div className={styles.bannercontent}>
          <h1>با ما، کیفیت را تجربه کنید</h1>
          <p>خریدی مطمئن از بهترین محصولات زرشک قائنات با ارسال سریع و تضمین رضایت شما</p>
        </div>
      </div>

      {/* بخش جستجو و فیلتر */}
      <div className={styles.filterContainer}>
        <input
          type="text"
          placeholder="جستجوی محصول..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.categorySelect}
        >
          <option value="همه">همه دسته‌بندی‌ها</option>
          <option value="زرشک">زرشک</option>
          <option value="زعفران">زعفران</option>
          <option value="عناب">عناب</option>
        </select>
      </div>

      <h2>محصولات ما</h2>

      {/* نمایش محصولات */}
      <div className={styles.productscontainer}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className='khavas'>
        <p>خواص زرشک : 
          خواص زعفران :
        </p>
      </div>
    </div>
  );
};

export default Home;
