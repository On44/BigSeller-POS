import React, { useEffect, useState } from 'react';
import { getAllEmployees, getEmployeeSales } from '../services/employeeService';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Box, Typography } from '@mui/material';

const EmployeeAnalytics = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeeList = await getAllEmployees();
        const employeeData = await Promise.all(
          employeeList.map(async (employee, index) => {
            const salesData = await getEmployeeSales(employee.id);
            return { id: employee.id || index, ...employee, ...salesData }; // Ensure each row has a unique `id`
          })
        );
        setEmployees(employeeData);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchEmployees();
  }, []);

  // Placeholder functions for actions
  const viewProfile = (employee) => {
    console.log("View profile for:", employee);
  };

  const editTarget = (employee) => {
    console.log("Edit target for:", employee);
  };

  const columns = [
    { field: 'name', headerName: 'Employee Name', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'totalSales', headerName: 'Total Sales', width: 150 },
    { field: 'salesTarget', headerName: 'Sales Target', width: 150 },
    { 
      field: 'targetStatus', 
      headerName: 'Target Status', 
      width: 130, 
      renderCell: (params) => (
        <span style={{ color: params.value === 'Met' ? 'green' : 'red' }}>
          {params.value}
        </span>
      ) 
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => viewProfile(params.row)}
          >
            View
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={() => editTarget(params.row)}
          >
            Edit
          </Button>
        </Box>
      )
    }
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}><br/>Employee Perfomance</Typography>
      <DataGrid
        rows={employees}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 15]}
        autoHeight
        disableSelectionOnClick
      />
    </Box>
  );
};

export default EmployeeAnalytics;
