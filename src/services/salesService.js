// src/services/salesService.js
import axios from 'axios';

export const postSale = async (cartItems) => {
  const saleData = {
    items: cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    totalAmount: cartItems.reduce((acc, item) => acc + item.price, 0),
  };

  // Replace with your actual backend API endpoint
  const response = await axios.post('/api/sales', saleData);

  return response.data;
};
