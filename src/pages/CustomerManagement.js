// src/pages/CustomerManagement.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { Loyalty, AddCircle } from '@mui/icons-material';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);

  useEffect(() => {
    // Fetch customer data from local storage or server
    const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    setCustomers(storedCustomers);
  }, []);

  const handleOpenDialog = (customer) => {
    if (customer) {
      setCurrentCustomer(customer);
      setName(customer.name);
      setEmail(customer.email);
      setPhone(customer.phone);
      setPurchaseHistory(customer.purchaseHistory || []);
      setLoyaltyPoints(customer.loyaltyPoints || 0);
    } else {
      setCurrentCustomer(null);
      setName('');
      setEmail('');
      setPhone('');
      setPurchaseHistory([]);
      setLoyaltyPoints(0);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveCustomer = () => {
    const newCustomer = {
      id: currentCustomer ? currentCustomer.id : Date.now(),
      name,
      email,
      phone,
      purchaseHistory,
      loyaltyPoints,
    };

    if (currentCustomer) {
      // Update customer
      const updatedCustomers = customers.map((cust) =>
        cust.id === currentCustomer.id ? newCustomer : cust
      );
      setCustomers(updatedCustomers);
      localStorage.setItem('customers', JSON.stringify(updatedCustomers));
    } else {
      // Add new customer
      setCustomers([...customers, newCustomer]);
      localStorage.setItem('customers', JSON.stringify([...customers, newCustomer]));
    }

    handleCloseDialog();
  };

  const handleDeleteCustomer = (id) => {
    const updatedCustomers = customers.filter((cust) => cust.id !== id);
    setCustomers(updatedCustomers);
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom><br/>
        <Loyalty /> Customer Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={() => handleOpenDialog(null)}
        sx={{ marginBottom: 2 }}
      >
        Add Customer
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Loyalty Points</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.loyaltyPoints}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleOpenDialog(customer)}>
                    Edit
                  </Button>
                  <Button color="secondary" onClick={() => handleDeleteCustomer(customer.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Add/Edit Customer */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentCustomer ? 'Edit Customer' : 'Add Customer'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Phone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Loyalty Points"
            type="number"
            fullWidth
            value={loyaltyPoints}
            onChange={(e) => setLoyaltyPoints(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CustomerManagement;
