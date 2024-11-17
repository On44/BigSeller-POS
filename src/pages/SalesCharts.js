// src/pages/Sales.js
import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const dataLine = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  // ...more data
];

const dataBar = [
  { name: 'Electronics', sales: 2400 },
  { name: 'Clothing', sales: 1398 },
  { name: 'Groceries', sales: 9800 },
  // ...more data
];

const dataPie = [
  { name: 'Credit Card', value: 4000 },
  { name: 'Cash', value: 3000 },
  { name: 'Online', value: 3000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const SalesCharts = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {/* Line Chart - Sales Over Time */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales Over Time
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dataLine}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
    
        {/* Bar Chart - Sales by Category */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales by Category
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataBar}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
    
        {/* Pie Chart - Sales by Payment Method */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales by Payment Method
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dataPie}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {dataPie.map((entry, index) => (
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
      </Grid>
    </Box>
  );
};

export default SalesCharts;
