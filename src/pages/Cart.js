// src/pages/Cart.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10.0 },
    { id: 2, name: 'Item 2', price: 15.0 },
  ]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  
  // M-Pesa variables
  const [mpesaPhone, setMpesaPhone] = useState('');

  const handleDeleteItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewItemName('');
    setNewItemPrice('');
  };

  const handleAddItem = () => {
    if (newItemName && newItemPrice) {
      const newItem = {
        id: Date.now(), // Unique ID for the new item
        name: newItemName,
        price: parseFloat(newItemPrice),
      };
      setCartItems([...cartItems, newItem]);
      handleCloseDialog();
    }
  };

  const handleOpenCheckout = () => {
    setOpenCheckout(true);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerAddress('');
    setMpesaPhone('');
  };

  const handleCheckout = () => {
    // Logic for handling the checkout process
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    // Call M-Pesa payment function
    initiateMpesaPayment(totalAmount, customerName, mpesaPhone);
  };

  const initiateMpesaPayment = async (amount, name, phone) => {
    try {
      const response = await fetch('YOUR_MPESA_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          phone,
          name,
          // Include other necessary parameters based on M-Pesa API documentation
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Payment successful!'); // Handle success
        setCartItems([]); // Clear the cart after successful payment
        handleCloseCheckout();
      } else {
        alert('Payment failed: ' + data.message); // Handle failure
      }
    } catch (error) {
      alert('Error processing payment: ' + error.message); // Handle network error
    }
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom><br/>
        <ShoppingCartIcon /> Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteItem(item.id)}>
                      Delete
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {cartItems.length > 0 && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Total: ${totalAmount}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenCheckout}
            sx={{ marginTop: 2 }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpenDialog}
        sx={{ marginTop: 2 }}
      >
        Add Item
      </Button>

      {/* Dialog for Adding Item */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Item Name"
            type="text"
            fullWidth
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={newItemPrice}
            onChange={(e) => setNewItemPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddItem} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Checkout Dialog */}
      <Dialog open={openCheckout} onClose={handleCloseCheckout}>
        <DialogTitle>Checkout</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
          />
          <TextField
            margin="dense"
            label="M-Pesa Phone Number"
            type="tel"
            fullWidth
            value={mpesaPhone}
            onChange={(e) => setMpesaPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCheckout} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCheckout} color="primary">
            Confirm Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Cart;
