// src/components/SalesFilters.js
import React from 'react';
import { Box, Grid, TextField, MenuItem, Button, Typography } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { Link } from 'react-router-dom';  // For linking to other pages

const SalesFilters = ({ filters, setFilters, handleSearch }) => {
  // Handle changes in text input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Handle changes in date fields
  const handleDateChange = (name, newValue) => {
    setFilters(prev => ({ ...prev, [name]: newValue }));
  };

  // Reset filters
  const handleReset = () => {
    setFilters({
      startDate: null,
      endDate: null,
      category: '',
      paymentMethod: '',
      searchQuery: '',
    });
  };

  // Export transactions functionality (dummy example)
  const handleExport = () => {
    alert('Transactions exported to CSV/Excel!');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Transaction Filters</Typography>
      
      {/* Navigation Links */}
      <Box sx={{ mb: 2 }}>
        <Button component={Link} to="/dashboard" variant="outlined" sx={{ mr: 2 }}>
          Go to Dashboard
        </Button>
        <Button component={Link} to="/products" variant="outlined" sx={{ mr: 2 }}>
          View Products
        </Button>
        <Button component={Link} to="/reports" variant="outlined">
          View Reports
        </Button>
      </Box>
      
      <Grid container spacing={2} alignItems="center">
        {/* Date Range Pickers */}
        <Grid item xs={12} sm={6} md={3}>
          <DatePicker
            label="Start Date"
            value={filters.startDate}
            onChange={(newValue) => handleDateChange('startDate', newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DatePicker
            label="End Date"
            value={filters.endDate}
            onChange={(newValue) => handleDateChange('endDate', newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>

        {/* Category Filter */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Category"
            name="category"
            value={filters.category}
            onChange={handleInputChange}
            fullWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Groceries">Groceries</MenuItem>
            {/* Add more categories as needed */}
          </TextField>
        </Grid>

        {/* Payment Method Filter */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Payment Method"
            name="paymentMethod"
            value={filters.paymentMethod}
            onChange={handleInputChange}
            fullWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
            {/* Add more payment methods as needed */}
          </TextField>
        </Grid>

        {/* Search Bar */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Search Transactions"
            name="searchQuery"
            value={filters.searchQuery}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Search Button */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}  // Call search handler when clicked
            fullWidth
          >
            Search
          </Button>
        </Grid>

        {/* Reset Button */}
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="outlined" color="secondary" onClick={handleReset} fullWidth>
            Reset Filters
          </Button>
        </Grid>

        {/* Export Transactions Button */}
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" color="success" onClick={handleExport} fullWidth>
            Export Transactions
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesFilters;
