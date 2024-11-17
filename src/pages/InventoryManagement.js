import React, { useState } from 'react';
import {
  Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';
import { Add, CloudUpload, CloudDownload } from '@mui/icons-material';
import Papa from 'papaparse';

const InventoryPage = () => {
  // State to store inventory items
  const [inventory, setInventory] = useState([
    { name: 'Product A', sku: 'SKU001', category: 'Electronics', supplier: 'Supplier X', price: 500, stock: 100 },
    { name: 'Product B', sku: 'SKU002', category: 'Clothing', supplier: 'Supplier Y', price: 150, stock: 10 },
  ]);

  // State for a new inventory item
  const [newItem, setNewItem] = useState({
    name: '', sku: '', category: '', supplier: '', price: '', stock: '',
  });

  // Handle CSV Import
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const data = results.data;
          setInventory((prevInventory) => [...prevInventory, ...data]);
        },
      });
    }
  };

  // Handle CSV Export
  const handleExport = () => {
    const csv = Papa.unparse(inventory);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'inventory.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle new item form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Handle adding new item to inventory
  const handleAddItem = () => {
    if (!newItem.name || !newItem.sku || !newItem.price || !newItem.stock) {
      alert('Please fill in all required fields.');
      return;
    }
    setInventory((prevInventory) => [...prevInventory, newItem]);
    setNewItem({ name: '', sku: '', category: '', supplier: '', price: '', stock: '' });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom><br/>
        Inventory Management
      </Typography>

      {/* Import & Export Buttons */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          startIcon={<CloudUpload />}
          component="label"
        >
          Import Inventory
          <input
            type="file"
            accept=".csv"
            hidden
            onChange={handleImport}
          />
        </Button>

        <Button
          variant="contained"
          startIcon={<CloudDownload />}
          onClick={handleExport}
        >
          Export Inventory
        </Button>
      </Box>

      {/* Add New Item Form */}
      <Typography variant="h6" gutterBottom>
        Add New Item
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField label="Product Name" name="name" value={newItem.name} onChange={handleInputChange} />
        <TextField label="SKU" name="sku" value={newItem.sku} onChange={handleInputChange} />
        <TextField label="Category" name="category" value={newItem.category} onChange={handleInputChange} />
        <TextField label="Supplier" name="supplier" value={newItem.supplier} onChange={handleInputChange} />
        <TextField label="Price" name="price" value={newItem.price} onChange={handleInputChange} />
        <TextField label="Stock" name="stock" value={newItem.stock} onChange={handleInputChange} />
        <Button variant="contained" startIcon={<Add />} onClick={handleAddItem}>
          Add Item
        </Button>
      </Box>

      {/* Inventory Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.supplier}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InventoryPage;
