import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // وارد کردن فایل CSS
import logo from '../image/logo.webp';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h1 className="header-title">زرشک قائنات</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-link">خانه</Link>
        <Link to="/cart" className="nav-link">سبد خرید</Link>
        <Link to="/ContactUs" className="nav-link">پروفایل</Link>
      </nav>
    </header>
  );
};

export default Header;
