// src/pages/ProductPage.js
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
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { postSale } from '../services/salesService'; // Assume this is a service for posting sales to the backend

// Sample Products
const products = [
  { id: 1, name: 'Product A', price: 100, quantity: 50 },
  { id: 2, name: 'Product B', price: 150, quantity: 30 },
  { id: 3, name: 'Product C', price: 200, quantity: 20 },
  // Add more products as necessary
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  
  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Post sale to backend
  const handlePostSale = async () => {
    try {
      await postSale(cart);  // Call sales API
      alert('Sale posted successfully!');
      setCart([]);  // Clear the cart after successful sale
    } catch (error) {
      console.error('Error posting sale:', error);
      alert('Failed to post sale.');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom><br/><br/>
        Products
      </Typography>

      {/* Product List */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price (Ksh)</TableCell>
              <TableCell>Quantity Available</TableCell>
              <TableCell>Add to Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>Ksh{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => addToCart(product)}
                    color="primary"
                    aria-label="add to cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Cart Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Cart
        </Typography>
        <Grid container spacing={2}>
          {cart.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="body2">Price: Ksh{item.price}</Typography>
                  <Typography variant="body2">Quantity: {item.quantity}</Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                    sx={{ mt: 1 }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Post Sale Button */}
      {cart.length > 0 && (
        <Box sx={{ mt: 4, textAlign: 'right' }}>
          <Button
            variant="contained"
            color="success"
            onClick={handlePostSale}
            startIcon={<ShoppingCartCheckoutIcon />}
          >
            Post Sale
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductPage;
