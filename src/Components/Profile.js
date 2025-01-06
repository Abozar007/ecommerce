import React, { useState } from 'react';
import styles from './Profile.module.css'; // فایل استایل جداگانه
import { FaUser } from 'react-icons/fa';


const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'abozarvakili',
    number: '09308957031',
    address: 'tehran,iran',
    email: ''
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
    <div className={styles.contactcontainer}>
      <form className={styles.contactform} onSubmit={handleSubmit}>
        <FaUser className={styles.icon} />
        <div className={styles.formgroup}>
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            name="name"
            value="abozarvakili"
            onChange={handleChange}
            required
          />
          <br />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email">شماره همراه</label>
          <input
            type="text"
            id="number"
            name="Number"
            value="0930897031"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email">آدرس منزل</label>
          <input
            type="address"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='d3r5@examlpe.com'
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.btnsubmit}>ویرایش</button>
      </form>
    </div>
  );
};
export default Profile;


