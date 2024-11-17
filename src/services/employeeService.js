// src/services/employeeService.js
import axios from 'axios';

// Function to track employee sales and log them under the employee's account
export const trackEmployeeSales = async (employeeId, salesAmount) => {
  try {
    const response = await axios.post(`/api/employees/${employeeId}/sales`, { salesAmount });
    return response.data;
  } catch (error) {
    console.error('Error tracking employee sales:', error);
    throw new Error('Failed to track employee sales.');
  }
};

// Function to retrieve an employee's total sales data
export const getEmployeeSales = async (employeeId) => {
  try {
    const response = await axios.get(`/api/employees/${employeeId}/sales`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving employee sales:', error);
    throw new Error('Failed to retrieve employee sales.');
  }
};

// Function to get the list of all employees
export const getAllEmployees = async () => {
  try {
    const response = await axios.get('/api/employees');
    return response.data;
  } catch (error) {
    console.error('Error retrieving employees:', error);
    throw new Error('Failed to retrieve employees.');
  }
};

// Function to manage employee roles and permissions
export const setEmployeeRole = async (employeeId, role) => {
  try {
    const response = await axios.patch(`/api/employees/${employeeId}/role`, { role });
    return response.data;
  } catch (error) {
    console.error('Error setting employee role:', error);
    throw new Error('Failed to set employee role.');
  }
};

// Function to set sales targets for employees
export const setEmployeeSalesTarget = async (employeeId, targetAmount) => {
  try {
    const response = await axios.patch(`/api/employees/${employeeId}/target`, { targetAmount });
    return response.data;
  } catch (error) {
    console.error('Error setting employee sales target:', error);
    throw new Error('Failed to set employee sales target.');
  }
};

// Function to evaluate if employee has met their sales target
export const evaluateEmployeePerformance = async (employeeId) => {
  try {
    const response = await axios.get(`/api/employees/${employeeId}/performance`);
    return response.data;
  } catch (error) {
    console.error('Error evaluating employee performance:', error);
    throw new Error('Failed to evaluate employee performance.');
  }
};
