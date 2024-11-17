// src/pages/SalesAnalytics.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample sales data for the bar chart
const salesData = [
  { name: 'Product A', unitsSold: 120 },
  { name: 'Product B', unitsSold: 85 },
  { name: 'Product C', unitsSold: 50 },
];

// Service data including paths for links
const servicesData = {
  discountservice: { description: "Manage discount rules and track discount usage.", path: "/discount" },
  employeeservice: { description: "Employee performance metrics and sales contributions.", path: "/employee" },
  inventoryservice: { description: "Real-time stock levels and auto-reorder alerts.", path: "/inventoryservice" },
  loyaltyservice: { description: "Customer loyalty points and rewards program overview.", path: "/loyaltyservice" },
  salesservice: { description: "Detailed sales reports and analytics.", path: "/salesservice" },
};

const SalesAnalytics = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom><br/>
        Sales Analytics
      </Typography>
      <Grid container spacing={2}>

        {/* Top-Selling Products Bar Chart */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Top-Selling Products
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="unitsSold" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Service Cards with Links */}
        {Object.entries(servicesData).map(([serviceKey, { description, path }]) => (
          <Grid item xs={12} sm={6} md={4} key={serviceKey}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  {serviceKey.replace(/service$/, '').replace(/^\w/, (c) => c.toUpperCase())} Service
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {description}
                </Typography>
                <Button
                  component={Link}
                  to={path}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  View {serviceKey.replace(/service$/, '').replace(/^\w/, (c) => c.toUpperCase())} Page
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SalesAnalytics;
