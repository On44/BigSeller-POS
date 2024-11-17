import axios from 'axios';

// Function to update loyalty points for a customer
export const updateLoyaltyPoints = async (customerId, points) => {
  try {
    const response = await axios.post(`/api/loyalty/${customerId}/update`, { points });
    return response.data;
  } catch (error) {
    console.error('Error updating loyalty points:', error);
    throw new Error('Failed to update loyalty points. Please try again.');
  }
};

// Function to redeem loyalty points for a discount or reward
export const redeemLoyaltyPoints = async (customerId, pointsToRedeem) => {
  try {
    const response = await axios.post(`/api/loyalty/${customerId}/redeem`, { pointsToRedeem });
    return response.data;
  } catch (error) {
    console.error('Error redeeming loyalty points:', error);
    throw new Error('Failed to redeem loyalty points. Please try again.');
  }
};

// Function to check loyalty balance for a customer
export const getLoyaltyBalance = async (customerId) => {
  try {
    const response = await axios.get(`/api/loyalty/${customerId}/balance`);
    return response.data;
  } catch (error) {
    console.error('Error fetching loyalty balance:', error);
    throw new Error('Failed to retrieve loyalty balance.');
  }
};

// Optional: Function to apply loyalty points as a discount on purchase
export const applyLoyaltyDiscount = (totalAmount, points, discountRate = 0.01) => {
  const discount = points * discountRate;
  return totalAmount - discount > 0 ? totalAmount - discount : 0;
};
