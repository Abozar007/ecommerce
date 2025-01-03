import React, { useState } from 'react';
import './ContactUs.css'; // فایل استایل جداگانه

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    // اینجا می‌توانید درخواست ارسال فرم به سرور را اضافه کنید
  };

  return (
    <div className="contactcontainer">
      <form className="contactform" onSubmit={handleSubmit}>
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
          <br />
          <label htmlFor="name">شماره همراه</label>
          <input
            type="text"
            id="number"
            name="Number"
            value={formData.Number}
            onChange={handleChange}
            placeholder="Your Number"
            required
          />
        </div>
        <div className="formgroup">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <button type="submit" className="btnsubmit">ثبت نام</button>
      </form>
    </div>
  );
};
export default ContactUs;


