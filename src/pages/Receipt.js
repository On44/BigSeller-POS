// src/pages/Receipt.js
import React from 'react';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import './Receipt.css'; // For custom styles (if needed)

const Receipt = ({ saleData }) => {
  const handlePrint = () => {
    window.print(); // Prints the current page
  };

  // Sample data (replace with actual data or props)
  const receiptData = saleData || {
    date: '2024-09-30',
    transactionId: 'TX123456789',
    cashier: 'Jack Oluoch',
    items: [
      { name: 'Product A', quantity: 2, price: 100 },
      { name: 'Product B', quantity: 1, price: 50 },
      { name: 'Product C', quantity: 3, price: 75 },
    ],
    taxRate: 0.1,
    totalAmount: 0,
  };

  // Calculate subtotal and total with tax
  const subtotal = receiptData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * receiptData.taxRate;
  const total = subtotal + tax;

  return (
    <div className="receipt-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}><br/><br/>
      <Typography variant="h4" align="center" gutterBottom>
        Phoenix POS Receipt
      </Typography>
      
      <div className="receipt-header" style={{ marginBottom: '20px' }}>
        <Typography>Date: {receiptData.date}</Typography>
        <Typography>Transaction ID: {receiptData.transactionId}</Typography>
        <Typography>Cashier: {receiptData.cashier}</Typography>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="receipt table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Item</strong></TableCell>
              <TableCell align="right"><strong>Quantity</strong></TableCell>
              <TableCell align="right"><strong>Price (Ksh)</strong></TableCell>
              <TableCell align="right"><strong>Total (Ksh)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {receiptData.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.price.toFixed(2)}</TableCell>
                <TableCell align="right">{(item.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="receipt-summary" style={{ marginTop: '20px' }}>
        <Typography variant="h6" align="right">Subtotal: Ksh {subtotal.toFixed(2)}</Typography>
        <Typography variant="h6" align="right">Tax (10%): Ksh {tax.toFixed(2)}</Typography>
        <Typography variant="h5" align="right"><strong>Total: Ksh {total.toFixed(2)}</strong></Typography>
      </div>

      <div className="receipt-actions" style={{ marginTop: '30px', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
        >
          Print Receipt
        </Button>
      </div>
    </div>
  );
};

export default Receipt;
