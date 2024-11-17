import axios from 'axios';

// Function to update inventory after a sale
export const updateInventory = async (cartItems) => {
  try {
    const inventoryUpdates = cartItems.map((item) => ({
      productId: item.id,
      quantitySold: item.quantity,
    }));
    const response = await axios.post('/api/inventory/update', inventoryUpdates);
    return response.data;
  } catch (error) {
    console.error('Error updating inventory:', error);
    throw new Error('Failed to update inventory.');
  }
};

// Function to check stock level for a specific product
export const getStockLevel = async (productId) => {
  try {
    const response = await axios.get(`/api/inventory/${productId}/stock`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock level:', error);
    throw new Error('Failed to retrieve stock level.');
  }
};

// Function to reorder stock when it reaches a certain threshold
export const reorderStock = async (productId, reorderAmount) => {
  try {
    const response = await axios.post(`/api/inventory/${productId}/reorder`, { reorderAmount });
    return response.data;
  } catch (error) {
    console.error('Error reordering stock:', error);
    throw new Error('Failed to reorder stock.');
  }
};

// Function to retrieve all inventory items for display or management
export const getAllInventory = async () => {
  try {
    const response = await axios.get('/api/inventory');
    return response.data;
  } catch (error) {
    console.error('Error retrieving inventory:', error);
    throw new Error('Failed to retrieve inventory.');
  }
};

// Optional: Function to mark items as low stock if below a threshold
export const getLowStockItems = async (threshold = 10) => {
  try {
    const response = await axios.get(`/api/inventory/low-stock?threshold=${threshold}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving low stock items:', error);
    throw new Error('Failed to retrieve low stock items.');
  }
};
