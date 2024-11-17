// src/pages/Sales.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const SalesDashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {/* Total Sales */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#4caf50', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Total Sales</Typography>
              <Typography variant="h4">Ksh.50,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Number of Transactions */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#2196f3', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Transactions</Typography>
              <Typography variant="h4">1,200</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Average Sale Value */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#ff9800', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Avg. Sale Value</Typography>
              <Typography variant="h4">Ksh.41.67</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Comparison with Previous Period */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f44336', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Growth</Typography>
              <Typography variant="h4">+15%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesDashboard;
