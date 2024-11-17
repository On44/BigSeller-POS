import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Mock data for top products
const topProducts = [
  {
    name: 'Product A',
    salesVolume: 500,
    revenue: 'Ksh.25,000',
  },
  {
    name: 'Product B',
    salesVolume: 300,
    revenue: 'Ksh.15,000',
  },
  {
    name: 'Product C',
    salesVolume: 200,
    revenue: 'Ksh.10,000',
  },
];

// Pie chart data for top-selling products
const pieData = {
  labels: topProducts.map(product => product.name),
  datasets: [
    {
      data: topProducts.map(product => product.salesVolume),
      backgroundColor: ['#4caf50', '#ff9800', '#03a9f4'],
      hoverBackgroundColor: ['#66bb6a', '#ffb74d', '#29b6f6'],
    },
  ],
};

const TopSellingProducts = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ mt: 3, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sales Volume Breakdown
        </Typography>
        <Pie data={pieData} />
      </Paper>
    </Box>
  );
};

export default TopSellingProducts;
