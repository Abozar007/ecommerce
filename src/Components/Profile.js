import React, { useState } from 'react';
import styles from './Profile.module.css'; // فایل استایل جداگانه

import logo1 from '../image/logo.webp';
const Profile = () => {
  // اطلاعات اصلی پروفایل
  const [formData, setFormData] = useState({
    name: 'abozarvakili',
    number: '09308957031',
    address: '',
    email: '',
  });

  // اطلاعات موقت برای حالت ویرایش
  const [editData, setEditData] = useState({ ...formData });

  // حالت ویرایش
  const [isEditing, setIsEditing] = useState(false);

  // مدیریت تغییرات ورودی‌ها
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // ذخیره تغییرات
  const handleSave = (e) => {
    e.preventDefault();
    setFormData(editData); // انتقال اطلاعات ویرایش‌شده به اطلاعات اصلی
    setIsEditing(false); // خروج از حالت ویرایش
    alert('اطلاعات با موفقیت ذخیره شد!');
  };

  // لغو تغییرات
  const handleCancel = () => {
    setEditData(formData); // بازگرداندن اطلاعات موقت به اطلاعات اصلی
    setIsEditing(false); // خروج از حالت ویرایش
  };

  return (
    <div className={styles.contactcontainer}>
      <form className={styles.contactform} onSubmit={handleSave}>
        <img className={styles.icon} src={logo1} alt='logo' />

        <div className={styles.formgroup}>
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            name="name"
            value={isEditing ? editData.name : formData.name}
            onChange={handleChange}
            disabled={!isEditing} // غیرفعال در حالت غیرویرایش
          />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="number">شماره همراه</label>
          <input
            type="text"
            id="number"
            name="number"
            value={isEditing ? editData.number : formData.number}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>


        <div className={styles.formgroup}>
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={isEditing ? editData.email : formData.email}
            onChange={handleChange}
            placeholder='d35r56@example.com'
            disabled={!isEditing}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="address">آدرس منزل</label>
          <input
            type="text"
            id="address"
            name="address"
            value={isEditing ? editData.address : formData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {/* دکمه‌ها */}
        {isEditing ? (
          <div>
            <button type="submit" className={styles.btnsubmit}>
              ذخیره تغییرات
            </button>
            <button
              type="button"
              className={styles.btncancel}
              onClick={handleCancel}
            >
              لغو
            </button>
          </div>
        ) : (
          <button
            type="button"
            className={styles.btnedit}
            onClick={() => setIsEditing(true)} // فعال کردن حالت ویرایش
          >
            ویرایش
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
