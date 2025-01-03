import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannercontent}>
        <h1>با ما، کیفیت را تجربه کنید  </h1>
        <p> خریدی مطمئن از بهترین محصولات زرشک قائنات با ارسال سریع و تضمین رضایت شما </p>
      </div>
    </div>
  );
};

export default Banner;
