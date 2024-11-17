import React, { useState } from 'react';
import { Button, Grid, Paper, Typography, TextField, IconButton, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import * as XLSX from 'xlsx'; // For Excel import
import './Sales.css'; // Import custom CSS for extra styling

const SalesPage = ({ settings }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple iPhone', price: 999, stock: 10 },
    { id: 2, name: 'Samsung Galaxy', price: 800, stock: 5 },
    { id: 3, name: 'MacBook Pro', price: 2500, stock: 2 },
    // Add more products as needed
  ]);

  const [recentTransactions] = useState([
    { id: 12345, product: 'Apple iPhone', amount: 999 },
    { id: 12344, product: 'Samsung Galaxy', amount: 1600 },
    // Add more transactions as needed
  ]);

  // Handles search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Adds product to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Removes item from cart
  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Calculates the total amount in the cart
  const calculateTotal = () => cartItems.reduce((total, item) => total + item.price, 0);

  // Calculates tax (example: 8%)
  const calculateTax = () => calculateTotal() * 0.08;

  // Calculates discount (example: flat $50 discount)
  const calculateDiscount = () => 50;

  // Handles payment methods
  const handlePayment = (method) => {
    const totalAmount = (calculateTotal() + calculateTax() - calculateDiscount()).toFixed(2);
    
    switch (method) {
      case 'cash':
        alert(`Payment of ${settings.currency} ${totalAmount} received in Cash.`);
        break;
      case 'mpesa':
        alert(`Redirecting to Mpesa payment gateway for ${settings.currency} ${totalAmount}.`);
        break;
      case 'card':
        alert(`Redirecting to Card payment gateway for ${settings.currency} ${totalAmount}.`);
        break;
      default:
        alert('Invalid payment method selected.');
    }
    setCartItems([]); // Reset cart after payment
  };

  // Handles uploading products from an Excel file
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const productsFromExcel = XLSX.utils.sheet_to_json(sheet);
      
      setProducts((prevProducts) => [...prevProducts, ...productsFromExcel]);
    };
    
    reader.readAsArrayBuffer(file);
  };

  // Remove product from the list
  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <div className="sales-page-container"><br/><br/>
      <Typography variant="h4" gutterBottom>POS Sales Page</Typography>

      {/* Product Search */}
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              )
            }}
          />
        </Grid>

        {/* Upload Excel File */}
        <Grid item xs={4}>
          <Button variant="contained" component="label">
            Upload Products from Excel
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
        </Grid>

        {/* Product List */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {products
              .filter(product => product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) // Check for undefined name
              .map(product => (
                <Grid item xs={12} sm={4} key={product.id}>
                  <Paper className="product-card">
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body1">Price: {settings.currency} {product.price}</Typography>
                    <Typography variant="body2">Stock: {product.stock}</Typography>
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAddToCart(product)}
                        startIcon={<ShoppingCartIcon />}
                      >
                        Add to Cart
                      </Button>
                      <IconButton color="secondary" onClick={() => handleRemoveProduct(product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Grid>

        {/* Cart Summary */}
        <Grid item xs={12} md={6}>
          <Paper className="cart-summary">
            <Typography variant="h6" gutterBottom>Cart Summary</Typography>
            {cartItems.length === 0 ? (
              <Typography variant="body2">Your cart is empty</Typography>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <Typography variant="body1">{item.name} - {settings.currency} {item.price}</Typography>
                    <IconButton onClick={() => handleRemoveFromCart(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                ))}
                <Divider />
                <Typography variant="h6">Subtotal: {settings.currency} {calculateTotal()}</Typography>
                <Typography variant="body2">Tax: {settings.currency} {calculateTax().toFixed(2)}</Typography>
                <Typography variant="body2">Discounts: {settings.currency} {calculateDiscount()}</Typography>
                <Typography variant="h5">Total: {settings.currency} {(calculateTotal() + calculateTax() - calculateDiscount()).toFixed(2)}</Typography>
              </div>
            )}
            <div className="payment-buttons">
              <Button variant="contained" color="success" onClick={() => handlePayment('cash')}>Pay with Cash</Button>
              <Button variant="contained" color="primary" onClick={() => handlePayment('mpesa')}>Pay with Mpesa</Button>
              <Button variant="contained" color="secondary" onClick={() => handlePayment('card')}>Pay with Card</Button>
            </div>
          </Paper>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12} md={6}>
          <Paper className="recent-transactions">
            <Typography variant="h6" gutterBottom>Recent Transactions</Typography>
            {recentTransactions.map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <Typography variant="body2">Sale #{transaction.id} - {transaction.product} - {settings.currency} {transaction.amount}</Typography>
              </div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SalesPage;
