import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';  // فایل استایل جداگانه
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';  // ایکون‌های شبکه اجتماعی

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>درباره ما</h3>
          <p>فروشگاه آنلاین زرشک و زعفران با بهترین محصولات ارگانیک و طبیعی.</p>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3>لینک‌های مفید</h3>
          <nav>
          <Link to="/About" className="">درباره ما</Link>
          <Link to="/" className="">فروشگاه </Link>
          <Link to="/" className="">سیاست حریم خصوصی </Link>
          </nav>
        </div>
        <div className="footer-contact">
          <h3>تماس با ما</h3>
          <p>ایمیل: vakiliabozar@gmail.com</p>
          <p>ادرس : خراسان جنوبی - قائنات</p>
          <p>تلفن:021 - 77335555</p>
          <div className="footer-map">
            {/* <h4>ما را در نقشه پیدا کنید</h4> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d81509.59381629199!2d59.16552990413746!3d33.785005257766024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d33.7700995!2d59.1652662!4m5!1s0x3f10f9647f7b3195%3A0x2919888ebd4a149f!2sQ5CC%2BG5%2C%20Qaen%2C%20South%20Khorasan%20Province!3m2!1d33.7713125!2d59.1704375!5e0!3m2!1sen!2s!4v1733270102383!5m2!1sen!2s"
              width="300"
              height="200"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe> */}

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 فروشگاه زرشک و زعفران</p>
      </div>
    </footer>
  );
};

export default Footer;
