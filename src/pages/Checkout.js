import React, { useState } from 'react';
import {
  Box, Typography, Stepper, Step, StepLabel,
  Button, TextField, Grid, RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe Public Key
const stripePromise = loadStripe('your_stripe_public_key');

// Mpesa Payment Handler
const handleMpesaPayment = async (amount, phoneNumber) => {
  try {
    const response = await fetch('/api/mpesa/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, phoneNumber }),  // Use dynamic amount and phone number
    });

    const data = await response.json();

    if (data.error) {
      alert('Mpesa Payment Failed: ' + data.error);
    } else {
      alert('Mpesa Payment Successful!');
    }
  } catch (error) {
    console.error('Mpesa Payment Error:', error);
    alert('Mpesa Payment Failed: An error occurred.');
  }
};

// Stripe Checkout Form
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.error('Stripe Payment Error:', error);
    } else {
      alert(`Stripe Payment Successful! PaymentMethod ID: ${paymentMethod.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!stripe}
        sx={{ mt: 2 }}
      >
        Pay with Stripe
      </Button>
    </form>
  );
};

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [phoneNumber, setPhoneNumber] = useState('');
  const steps = ['Shipping Details', 'Payment Options', 'Review Order'];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handlePayment = async () => {
    if (paymentMethod === 'mpesa') {
      await handleMpesaPayment(500, phoneNumber); // Example dynamic values
    } else {
      // Stripe payment will be handled in the `CheckoutForm` submission
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      {/* Stepper to show progress */}
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step-based content */}
      {activeStep === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Full Name" variant="outlined" sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Shipping Address" variant="outlined" sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone Number" variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} sx={{ mb: 2 }} />
          </Grid>
          <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
            Next
          </Button>
        </Grid>
      )}

      {activeStep === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Choose Payment Method
          </Typography>

          <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} sx={{ mb: 2 }}>
            <FormControlLabel value="mpesa" control={<Radio />} label="Mpesa" />
            <FormControlLabel value="stripe" control={<Radio />} label="Credit/Debit Card (Stripe)" />
          </RadioGroup>

          {/* Mpesa Payment */}
          {paymentMethod === 'mpesa' && (
            <Button variant="contained" color="secondary" fullWidth onClick={handlePayment} sx={{ my: 2 }}>
              Pay with Mpesa
            </Button>
          )}

          {/* Stripe Payment */}
          {paymentMethod === 'stripe' && (
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}

          <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
            Next
          </Button>
        </Box>
      )}

      {activeStep === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Review Your Order
          </Typography>
          <Typography variant="body1">
            You are about to place an order. Make sure your information is correct.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Place Order
          </Button>
        </Box>
      )}

      {activeStep > 0 && (
        <Button variant="outlined" onClick={handleBack} sx={{ mt: 2 }}>
          Back
        </Button>
      )}
    </Box>
  );
};

export default Checkout;
