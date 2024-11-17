import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Reports = () => {
  // Sample data for sales and analytics
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Sales',
        data: [1200, 1900, 3000, 2500, 2200, 2900],
        backgroundColor: 'rgba(25, 118, 210, 0.5)',
      },
    ],
  };

  const productData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Top Selling Products',
        data: [300, 450, 150, 200],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom><br/>
        Reports and Analytics
      </Typography>

      <Grid container spacing={3}>
        {/* Total Sales Overview */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Sales Overview" />
            <CardContent>
              <Line data={salesData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Top Selling Products */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Top Selling Products" />
            <CardContent>
              <Bar data={productData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Customer Analytics */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Customer Analytics" />
            <CardContent>
              <Typography variant="h6">Top Customers</Typography>
              <Typography>Customer A: $2000</Typography>
              <Typography>Customer B: $1800</Typography>
              <Typography>Customer C: $1500</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Revenue Breakdown */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Revenue Breakdown" />
            <CardContent>
              <Typography variant="h6">By Payment Method</Typography>
              <Typography>Credit Card: $4000</Typography>
              <Typography>Cash: $3000</Typography>
              <Typography>Mobile Payments: $1500</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;
