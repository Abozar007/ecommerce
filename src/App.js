import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
import Profile from './Components/Profile';

import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // بازیابی تم از localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light"); // ذخیره تم
  };
  return (
    <Router>
      <Header />
      <div className="app-container">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {isDarkTheme ? <FaSun size={24} color="#FFD700" /> : <FaMoon size={24} color="#4C4C4C" />}
      </button></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path='/Profile' element={<Profile />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
