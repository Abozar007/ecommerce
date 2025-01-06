import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"; // آدرس بک‌اند

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};
export const addToCartAPI = async (product) => {
    const response = await axios.post(`${BASE_URL}/cart`, {
      product_id: product.id,
      quantity: 1, // مقدار پیش‌فرض
    });
    return response.data;
  };
  