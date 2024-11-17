// src/pages/EmployeeManagement.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Group as GroupIcon } from '@mui/icons-material';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openLeaveDialog, setOpenLeaveDialog] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [shift, setShift] = useState('');
  const [date, setDate] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [leaveStartDate, setLeaveStartDate] = useState('');
  const [leaveEndDate, setLeaveEndDate] = useState('');
  const [leaveReason, setLeaveReason] = useState('');

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleOpenDialog = (employee) => {
    setCurrentEmployee(employee);
    setName(employee?.name || '');
    setRole(employee?.role || '');
    setShift(employee?.shift || '');
    setDate(employee?.date || '');
    setTimeIn(employee?.timeIn || '');
    setTimeOut(employee?.timeOut || '');
    setOpenDialog(true);
  };

  const handleOpenLeaveDialog = (employee) => {
    setCurrentEmployee(employee);
    setOpenLeaveDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentEmployee(null);
    setName('');
    setRole('');
    setShift('');
    setDate('');
    setTimeIn('');
    setTimeOut('');
  };

  const handleCloseLeaveDialog = () => {
    setOpenLeaveDialog(false);
    setLeaveStartDate('');
    setLeaveEndDate('');
    setLeaveReason('');
  };

  const handleSaveEmployee = () => {
    let newEmployee;

    if (currentEmployee) {
      newEmployee = { ...currentEmployee, name, role, shift, date, timeIn, timeOut };
      const updatedEmployees = employees.map((emp) =>
        emp.id === currentEmployee.id ? newEmployee : emp
      );
      setEmployees(updatedEmployees);
    } else {
      newEmployee = {
        id: Date.now(),
        name,
        role,
        shift,
        date,
        timeIn,
        timeOut,
      };
      setEmployees([...employees, newEmployee]);
    }

    localStorage.setItem('employees', JSON.stringify([...employees, newEmployee]));
    handleCloseDialog();
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const handleCheckIn = (id) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === id
        ? { ...emp, timeIn: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const handleCheckOut = (id) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === id
        ? { ...emp, timeOut: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const handleSubmitLeaveRequest = () => {
    // Implement leave request submission logic
    alert(`Leave requested from ${leaveStartDate} to ${leaveEndDate} for reason: ${leaveReason}`);
    handleCloseLeaveDialog();
  };

  const calculateHoursWorked = (timeIn, timeOut) => {
    if (!timeIn || !timeOut) return 'N/A';
    const [inHours, inMinutes] = timeIn.split(':').map(Number);
    const [outHours, outMinutes] = timeOut.split(':').map(Number);
    const totalInMinutes = inHours * 60 + inMinutes;
    const totalOutMinutes = outHours * 60 + outMinutes;
    const totalMinutesWorked = totalOutMinutes - totalInMinutes;
    const hours = Math.floor(totalMinutesWorked / 60);
    const minutes = totalMinutesWorked % 60;
    return `${hours}h ${minutes}m`;
  };


  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom><br/>
        <GroupIcon /> Employee Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog(null)}
        sx={{ marginBottom: 2 }}
      >
        Add Employee
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Shift</TableCell>
              <TableCell>Date of Reporting</TableCell>
              <TableCell>Time In</TableCell>
              <TableCell>Time Out</TableCell>
              <TableCell>Total Hours Worked</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.shift}</TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell>{employee.timeIn}</TableCell>
                <TableCell>{employee.timeOut}</TableCell>
                <TableCell>{calculateHoursWorked(employee.timeIn, employee.timeOut)}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(employee)}>Edit</IconButton>
                  <IconButton onClick={() => handleDeleteEmployee(employee.id)}>Delete</IconButton>
                  <Button onClick={() => handleCheckIn(employee.id)}>Check In</Button>
                  <Button onClick={() => handleCheckOut(employee.id)}>Check Out</Button>
                  <Button onClick={() => handleOpenLeaveDialog(employee)}>Request Leave</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Add/Edit Employee */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentEmployee ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
              {/* Add more roles as needed */}
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            label="Shift"
            fullWidth
            value={shift}
            onChange={(e) => setShift(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Date of Joining"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Time In"
            type="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Time Out"
            type="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveEmployee}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Leave Request Dialog */}
      <Dialog open={openLeaveDialog} onClose={handleCloseLeaveDialog}>
        <DialogTitle>Leave Request</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            label="Leave Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={leaveStartDate}
            onChange={(e) => setLeaveStartDate(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Leave End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={leaveEndDate}
            onChange={(e) => setLeaveEndDate(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Reason for Leave"
            fullWidth
            value={leaveReason}
            onChange={(e) => setLeaveReason(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLeaveDialog}>Cancel</Button>
          <Button onClick={handleSubmitLeaveRequest}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmployeeManagement;
