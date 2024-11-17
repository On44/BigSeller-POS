// src/pages/InteractiveTransactions.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const transactions = [
  { id: 'T001', date: '2024-04-01', customer: 'John Doe', items: 'Item A, Item B', total: 150, payment: 'Credit Card' },
  { id: 'T002', date: '2024-04-03', customer: 'Jane Smith', items: 'Item C', total: 75, payment: 'Cash' },
  // More transactions can be added here
];

const InteractiveTransactions = () => {
  const [filters, setFilters] = useState({ startDate: null, endDate: null, searchQuery: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortField, setSortField] = useState('date');

  const handleDateChange = (name, newValue) => {
    setFilters((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, searchQuery: e.target.value });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSort = (field) => {
    const isAsc = sortField === field && sortDirection === 'asc';
    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortField(field);
  };

  const filteredTransactions = transactions
    .filter((txn) => {
      const matchesQuery = txn.customer.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesDate = (!filters.startDate || new Date(txn.date) >= filters.startDate) &&
                          (!filters.endDate || new Date(txn.date) <= filters.endDate);
      return matchesQuery && matchesDate;
    })
    .sort((a, b) => {
      if (sortField === 'total') {
        return sortDirection === 'asc' ? a.total - b.total : b.total - a.total;
      }
      return sortDirection === 'asc'
        ? new Date(a[sortField]) - new Date(b[sortField])
        : new Date(b[sortField]) - new Date(a[sortField]);
    });

  const displayedTransactions = filteredTransactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Transactions
      </Typography>

      {/* Filter Section */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4}>
          <DatePicker
            label="Start Date"
            value={filters.startDate}
            onChange={(newValue) => handleDateChange('startDate', newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DatePicker
            label="End Date"
            value={filters.endDate}
            onChange={(newValue) => handleDateChange('endDate', newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search by Customer"
            value={filters.searchQuery}
            onChange={handleSearchChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={() => setFilters({ startDate: null, endDate: null, searchQuery: '' })}>
            Reset Filters
          </Button>
        </Grid>
      </Grid>

      {/* Transactions Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'id'}
                  direction={sortDirection}
                  onClick={() => handleSort('id')}
                >
                  Transaction ID
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'date'}
                  direction={sortDirection}
                  onClick={() => handleSort('date')}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Items Sold</TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'total'}
                  direction={sortDirection}
                  onClick={() => handleSort('total')}
                >
                  Total Amount
                </TableSortLabel>
              </TableCell>
              <TableCell>Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedTransactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.id}</TableCell>
                <TableCell>{txn.date}</TableCell>
                <TableCell>{txn.customer}</TableCell>
                <TableCell>{txn.items}</TableCell>
                <TableCell>${txn.total.toFixed(2)}</TableCell>
                <TableCell>{txn.payment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredTransactions.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
        />
      </TableContainer>

      {/* Sales Bar Chart */}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Sales Overview
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={transactions}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InteractiveTransactions;
