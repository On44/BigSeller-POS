// src/pages/CustomerInsights.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

// Dummy data for customer segments
const customerSegments = [
  { name: 'Regular Customers', value: 400 },
  { name: 'New Customers', value: 300 },
  { name: 'VIP Customers', value: 300 },
];

// Colors for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// Dummy data for additional insights
const avgPurchaseFrequency = 5.2;  // Average purchases per customer
const preferredPaymentMethod = 'Credit Card';
const customerLifetimeValue = 1250; // Example value in dollars

const CustomerInsights = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Customer Insights
      </Typography>

      {/* Navigation Links to Other Pages */}
      <Box sx={{ mb: 2 }}>
        <Button component={Link} to="/customer management" variant="outlined" sx={{ mr: 2 }}>
          Go to Customer Management
        </Button>
        <Button component={Link} to="/reports" variant="outlined">
          View Sales Reports
        </Button>
      </Box>

      <Grid container spacing={2}>
        {/* Pie Chart - Customer Segments */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Customer Segments
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={customerSegments}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Customer Metrics (e.g., Purchase Frequency, Preferred Payment) */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Customer Metrics
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1">
                <strong>Average Purchase Frequency:</strong> {avgPurchaseFrequency} purchases/customer
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1">
                <strong>Preferred Payment Method:</strong> {preferredPaymentMethod}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1">
                <strong>Customer Lifetime Value (CLV):</strong> ${customerLifetimeValue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerInsights;
