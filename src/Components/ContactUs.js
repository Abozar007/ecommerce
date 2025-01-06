import React, { useState } from 'react';
import './ContactUs.css'; // فایل استایل جداگانه
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // استفاده از useNavigate

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const navigate = useNavigate(); // استفاده از useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // هدایت به صفحه پروفایل
    navigate('/profile');
  };

  return (
    <div className="contactcontainer">
      <form className="contactform" onSubmit={handleSubmit}>
        <FaUser className='icon' />
        <div className="formgroup">
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="formgroup">
          <label htmlFor="number">شماره همراه</label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your Number"
            required
          />
        </div>
        <button type="submit" className="btnsubmit">ثبت نام</button>
      </form>
    </div>
  );
};

export default ContactUs;
