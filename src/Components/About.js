import React from 'react';
import './About.css';
import banner1 from '../image/fds.jpg';
import banner2 from '../image/wq.jpg';

const About = () => {
  return (
    <div className='container'>
        <div className='banner1'>
        <img  src={banner1}  alt='banner' />
        <img  src={banner2} alt='banner' />
        </div>
      <div className="about-container">
      <h1 className="about-title">درباره ما</h1>
      <p className="about-description">
        ما با بیش از نیم قرن تجربه در فروش زرشک و زعفران، متعهد به ارائه بهترین محصولات به مشتریان خود هستیم. از آغاز فعالیت خود، همواره بر کیفیت، اصالت و رضایت مشتریان تأکید داشته‌ایم.
      </p>
      <h2 className="about-subtitle">قدمت زرشک و زعفران</h2>
      <p className="about-details">
        زرشک و زعفران از محصولات اصیل و پرارزش ایران هستند که از دیرباز به عنوان نمادی از کیفیت و مرغوبیت شناخته می‌شوند. این محصولات نه تنها در آشپزی ایرانی جایگاه ویژه‌ای دارند، بلکه به دلیل خواص درمانی و طعم منحصر به فرد، در سراسر جهان طرفداران زیادی دارند.
      </p>
      <h2 className="about-subtitle">تعهدات ما</h2>
      <p className="about-details">
        ما به ارائه محصولاتی با کیفیت بالا، قیمتی مناسب و بسته‌بندی‌هایی استاندارد افتخار می‌کنیم و همواره تلاش می‌کنیم تا تجربه‌ای متفاوت از خرید آنلاین را برای شما فراهم کنیم.
      </p>
    </div>
    </div>
  );
};

export default About;
