import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
