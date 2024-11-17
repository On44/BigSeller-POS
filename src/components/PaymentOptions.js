// src/components/PaymentOptions.js
import React, { useState } from 'react';
import { Box, Button, Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';

const PaymentOptions = ({ onConfirm }) => {
  const [selectedPayment, setSelectedPayment] = useState('Credit Card');

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleConfirm = () => {
    onConfirm(selectedPayment);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Payment Method
      </Typography>
      <RadioGroup value={selectedPayment} onChange={handlePaymentChange}>
        <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
        <FormControlLabel value="Mpesa" control={<Radio />} label="Mpesa" />
        <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={handleConfirm} sx={{ mt: 2 }}>
        Confirm Payment
      </Button>
    </Box>
  );
};

export default PaymentOptions;
