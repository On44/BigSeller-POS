// src/pages/Sales.js
import React from 'react';
import { Box, Button } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

const ExportData = () => {
  const handleExport = () => {
    // Implement export functionality, e.g., API call to fetch CSV data
    // For demonstration, we'll trigger a download of a sample CSV
    const csvData = 'Transaction ID,Date,Time,Customer,Items,Total,Payment\nT001,2024-04-01,10:30 AM,John Doe,"Item A, Item B",$150.00,Credit Card';
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sales_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <Box sx={{ p: 3, textAlign: 'right' }}>
      <Button variant="contained" color="primary" startIcon={<DownloadIcon />} onClick={handleExport}>
        Export CSV
      </Button>
    </Box>
  );
};

export default ExportData;
