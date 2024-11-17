import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import SalesDashboard from './SalesDashboard';
import SalesCharts from './SalesCharts';
import RecentTransactions from './RecentTransactions';
import SalesFilters from './SalesFilters';
import TopSellingProducts from './TopSellingProducts';
import SalesTargets from './SalesTargets';
import CustomerInsights from './CustomerInsights';
import ExportData from './ExportData';

const Dashboard = () => {
  // State for filters
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    category: '',
    paymentMethod: '',
    searchQuery: '',
  });

  // State for transactions
  const [transactions] = useState([
    { id: 1, name: 'Product A', category: 'Electronics', paymentMethod: 'Credit Card', date: '2024-10-01', amount: 200 },
    { id: 2, name: 'Product B', category: 'Clothing', paymentMethod: 'Cash', date: '2024-10-02', amount: 100 },
    { id: 3, name: 'Product C', category: 'Groceries', paymentMethod: 'Online', date: '2024-10-03', amount: 300 },
    // Add more mock transactions as needed
  ]);

  // State for sales data
  const [salesData, setSalesData] = useState({
    totalSales: 0,
    totalRevenue: 0,
    topProducts: [],
    targetsAchieved: 0,
    customerInsights: {},
  });

  // Effect to update sales stats, top products, etc., whenever transactions change
  useEffect(() => {
    const totalSales = transactions.length;
    const totalRevenue = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    const topProducts = transactions.reduce((acc, transaction) => {
      acc[transaction.name] = (acc[transaction.name] || 0) + 1;
      return acc;
    }, {});

    setSalesData({
      totalSales,
      totalRevenue,
      topProducts: Object.entries(topProducts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5), // Top 5 products
      targetsAchieved: totalRevenue >= 1000 ? 100 : (totalRevenue / 1000) * 100, // Example target
      customerInsights: {
        totalCustomers: new Set(transactions.map(t => t.paymentMethod)).size,
      },
    });
  }, [transactions]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Sales Dashboard Overview */}
        <SalesDashboard data={salesData} />

        {/* Sales Filters */}
        <SalesFilters filters={filters} setFilters={setFilters} />

        <Grid container spacing={3}>
          {/* Sales Charts and Graphs */}
          <Grid item xs={12} md={8}>
            <SalesCharts transactions={transactions} />
          </Grid>

          {/* Top Selling Products */}
          <Grid item xs={12} md={4}>
            <TopSellingProducts topProducts={salesData.topProducts} />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Recent Transactions Table */}
          <Grid item xs={12} md={8}>
            <RecentTransactions transactions={transactions} filters={filters} />
          </Grid>

          {/* Sales Targets and Achievements */}
          <Grid item xs={12} md={4}>
            <SalesTargets progress={salesData.targetsAchieved} />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Customer Insights */}
          <Grid item xs={12} md={6}>
            <CustomerInsights insights={salesData.customerInsights} />
          </Grid>

          {/* Export Data */}
          <Grid item xs={12} md={6}>
            <ExportData transactions={transactions} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
