import React, {  useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

import ban1 from '../image/bozar2.jpg.webp';
import ban2 from '../image/ghale.jpg';
import ban3 from '../image/masjed2.jpg';

const productList = [
  { id: 1, name: 'زرشک تازه دون شده', category: 'زرشک', description: 'کیلویی', price: '130,000', properties: 'سرشار از آنتی‌اکسیدان و تقویت سیستم ایمنی', image: img1 },
  { id: 2, name: 'زرشک شاخه', category: 'زرشک', description: 'کیلویی', price: '110,000', properties: 'تصفیه‌کننده خون و مفید برای قلب',  image: img6 },
  { id: 3, name: 'زرشک پفکی', category: 'زرشک', description: 'کیلویی', price: '180,000', properties: 'تقویت سیستم گوارشی و کاهش کلسترول', image: img5 },
  { id: 4, name: 'آب زرشک تازه', category: 'زرشک', description: '1.5 لیتری', price: '110,000',properties: 'کمک به کاهش فشار خون و سم‌زدایی بدن', image: img2 },
  { id: 5, name: 'آب زرشک تازه', category: 'زرشک', description: '1 لیتری', price: '90,000',properties: 'مفید برای کبد و صفرا',  image: img3 },
  { id: 6, name: 'زعفران نگین', category: 'زعفران', description: 'مثقال', price: '380,000',properties: 'افزایش انرژی و بهبود خلق‌وخو',  image: img4 },
  { id: 7, name: 'زعفران گل', category: 'زعفران', description: 'کیلویی', price: '850,000', properties: 'کاهش استرس و بهبود خواب', image: img7 },
  { id: 8, name: 'عناب تازه', category: 'عناب', description: 'کیلویی', price: '80,000', properties: 'تقویت سیستم ایمنی و کاهش استرس', image: img8 },
];

const Home = () => {
 
  const bannerImages = [
    {id :1, src:ban1, alt:"بنر1"},
    {id :1, src:ban2 , alt:"بنر2"},
    {id :1, src:ban3, alt:"بنر3"},
  ];
  const sliderSettings ={
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1, // تعداد اسلایدهای همزمان
    centerMode: true, // فعال‌سازی حالت مرکز
    centerPadding: "0px", // فاصله دو طرف عکس وسط
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    focusOnSelect: true, // امکان انتخاب دستی اسلایدها
  };

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
         <Slider {...sliderSettings}>
          {bannerImages.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
            </div>
          ))}
        </Slider>
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
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Home;