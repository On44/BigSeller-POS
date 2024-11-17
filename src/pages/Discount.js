import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, MenuItem, Select, FormControl, InputLabel, Checkbox, FormControlLabel, Tooltip } from '@mui/material';
import { applyDiscount } from '../services/discountService';

const Discount = () => {
  const [totalAmount] = useState(100); // Example initial amount
  const [discountCode, setDiscountCode] = useState('');
  const [discountedTotal, setDiscountedTotal] = useState(null);
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [discountType, setDiscountType] = useState('');
  const [minPurchase, setMinPurchase] = useState('');
  const [validityPeriod, setValidityPeriod] = useState('');
  const [eligible, setEligible] = useState(false);
  const [error, setError] = useState('');

  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    KES: 110, // Example rates; use actual rates or an API for real-time data
  };

  const handleApplyDiscount = () => {
    try {
      const newTotal = applyDiscount(totalAmount, discountCode);
      setDiscountedTotal(newTotal * currencyRates[currency]);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Display error message
      setDiscountedTotal(null);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: 'auto', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}><br/>
      <Typography variant="h5" align="center" gutterBottom><br/>
        Apply Discount
      </Typography>

      {/* Currency Selection */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Currency</InputLabel>
        <Select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          label="Select Currency"
        >
          <MenuItem value="USD">USD - $</MenuItem>
          <MenuItem value="EUR">EUR - €</MenuItem>
          <MenuItem value="GBP">GBP - £</MenuItem>
          <MenuItem value="KES">KES - Ksh</MenuItem>
        </Select>
      </FormControl>

      {/* Discount Code */}
      <TextField
        label="Discount Code"
        variant="outlined"
        fullWidth
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Discount Type */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Discount Type</InputLabel>
        <Select
          value={discountType}
          onChange={(e) => setDiscountType(e.target.value)}
          label="Discount Type"
        >
          <MenuItem value="percentage">Percentage</MenuItem>
          <MenuItem value="fixed">Fixed Amount</MenuItem>
          <MenuItem value="bogo">Buy One Get One (BOGO)</MenuItem>
        </Select>
      </FormControl>

      {/* Minimum Purchase */}
      <TextField
        label="Minimum Purchase Amount"
        variant="outlined"
        type="number"
        fullWidth
        value={minPurchase}
        onChange={(e) => setMinPurchase(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Validity Period */}
      <TextField
        label="Validity Period (YYYY-MM-DD to YYYY-MM-DD)"
        variant="outlined"
        fullWidth
        value={validityPeriod}
        onChange={(e) => setValidityPeriod(e.target.value)}
        placeholder="2024-06-01 to 2024-08-31"
        sx={{ mb: 2 }}
      />

      {/* Eligibility Checkbox */}
      <FormControlLabel
        control={<Checkbox checked={eligible} onChange={() => setEligible(!eligible)} />}
        label="Only for eligible customers"
      />

      {/* Apply Button */}
      <Button variant="contained" color="primary" fullWidth onClick={handleApplyDiscount} sx={{ mt: 3 }}>
        Apply Discount
      </Button>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {/* Discounted Total */}
      {discountedTotal !== null && (
        <Typography variant="body1" align="center" sx={{ mt: 3, fontWeight: 'bold' }}>
          Discounted Total: {currency} {discountedTotal.toFixed(2)}
        </Typography>
      )}

      {/* Tooltip to Provide Additional Information */}
      <Box sx={{ mt: 3 }}>
        <Tooltip title="Set discount type, code, and criteria. Apply eligible discounts for a limited time." arrow>
          <Typography variant="caption" display="block" align="center" sx={{ color: 'text.secondary' }}>
            * Select discount options, apply eligibility, and adjust your currency preference.
          </Typography>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Discount;
