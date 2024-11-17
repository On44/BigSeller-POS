import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel, Switch, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import './Settings.css';

const SettingsPage = () => {
  // State for settings
  const [language, setLanguage] = useState('en');
  const [colorScheme, setColorScheme] = useState('light');
  const [currency, setCurrency] = useState('USD');
  const [taxRate, setTaxRate] = useState(10);
  const [receiptTemplate, setReceiptTemplate] = useState('default');
  const [staffRights, setStaffRights] = useState(['view_sales', 'manage_inventory']);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [, setBackup] = useState('');
  
  // Payment Integration
  const [paymentGateway, setPaymentGateway] = useState('Mpesa');

  // Snackbar feedback
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Available options
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'sw', label: 'Swahili' },
    { code: 'fr', label: 'French' },
  ];

  const colorSchemes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  const currencies = [
    { value: 'USD', label: 'USD - US Dollar' },
    { value: 'KES', label: 'KES - Kenyan Shilling' },
    { value: 'EUR', label: 'EUR - Euro' },
  ];

  const receiptTemplates = [
    { value: 'default', label: 'Default Template' },
    { value: 'minimal', label: 'Minimal Template' },
    { value: 'detailed', label: 'Detailed Template' },
  ];

  const paymentGateways = [
    { value: 'Mpesa', label: 'Mpesa' },
    { value: 'PayPal', label: 'PayPal' },
    { value: 'Stripe', label: 'Stripe' },
  ];

  const staffRightsOptions = [
    { value: 'view_sales', label: 'View Sales' },
    { value: 'manage_inventory', label: 'Manage Inventory' },
    { value: 'process_payments', label: 'Process Payments' },
    { value: 'view_reports', label: 'View Reports' },
  ];

  // Load settings from local storage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    const storedColorScheme = localStorage.getItem('colorScheme');
    const storedCurrency = localStorage.getItem('currency');
    const storedTaxRate = localStorage.getItem('taxRate');
    const storedReceiptTemplate = localStorage.getItem('receiptTemplate');
    const storedStaffRights = JSON.parse(localStorage.getItem('staffRights'));
    const storedPaymentGateway = localStorage.getItem('paymentGateway');

    if (storedLanguage) setLanguage(storedLanguage);
    if (storedColorScheme) setColorScheme(storedColorScheme);
    if (storedCurrency) setCurrency(storedCurrency);
    if (storedTaxRate) setTaxRate(Number(storedTaxRate));
    if (storedReceiptTemplate) setReceiptTemplate(storedReceiptTemplate);
    if (storedStaffRights) setStaffRights(storedStaffRights);
    if (storedPaymentGateway) setPaymentGateway(storedPaymentGateway);
  }, []);

  const handleSaveSettings = () => {
    // Save the settings to local storage
    localStorage.setItem('language', language);
    localStorage.setItem('colorScheme', colorScheme);
    localStorage.setItem('currency', currency);
    localStorage.setItem('taxRate', taxRate);
    localStorage.setItem('receiptTemplate', receiptTemplate);
    localStorage.setItem('staffRights', JSON.stringify(staffRights));
    localStorage.setItem('paymentGateway', paymentGateway);

    // Show confirmation message
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="settings-container"><br/><br/>
      <Typography variant="h4" gutterBottom>POS Settings</Typography>

      <Grid container spacing={3}>
        {/* Language Setting */}
        <Grid item xs={12} sm={6}>
          <Paper className="settings-box">
            <Typography variant="h6">Language</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Choose Language</InputLabel>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                label="Choose Language"
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code}>
                    {lang.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        {/* Color Scheme Setting */}
        <Grid item xs={12} sm={6}>
          <Paper className="settings-box">
            <Typography variant="h6">Color Scheme</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Choose Color Scheme</InputLabel>
              <Select
                value={colorScheme}
                onChange={(e) => setColorScheme(e.target.value)}
                label="Choose Color Scheme"
              >
                {colorSchemes.map((scheme) => (
                  <MenuItem key={scheme.value} value={scheme.value}>
                    {scheme.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        {/* Currency Setting */}
        <Grid item xs={12} sm={6}>
          <Paper className="settings-box">
            <Typography variant="h6">Currency</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Choose Currency</InputLabel>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                label="Choose Currency"
              >
                {currencies.map((cur) => (
                  <MenuItem key={cur.value} value={cur.value}>
                    {cur.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        {/* Tax Rate Setting */}
        <Grid item xs={12} sm={6}>
          <Paper className="settings-box">
            <Typography variant="h6">Tax Rate (%)</Typography>
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
            />
          </Paper>
        </Grid>

        {/* Receipt Template */}
        <Grid item xs={12} sm={6}>
          <Paper className="settings-box">
            <Typography variant="h6">Receipt Template</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Choose Template</InputLabel>
              <Select
                value={receiptTemplate}
                onChange={(e) => setReceiptTemplate(e.target.value)}
                label="Choose Template"
              >
                {receiptTemplates.map((template) => (
                  <MenuItem key={template.value} value={template.value}>
                    {template.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        {/* Staff Rights Setting */}
        <Grid item xs={12}>
          <Paper className="settings-box">
            <Typography variant="h6">Staff Rights</Typography>
            {staffRightsOptions.map((option) => (
              <div key={option.value}>
                <label>
                  <input
                    type="checkbox"
                    checked={staffRights.includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setStaffRights([...staffRights, option.value]);
                      } else {
                        setStaffRights(staffRights.filter((right) => right !== option.value));
                      }
                    }}
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </Paper>
        </Grid>

        {/* Notifications Setting */}
        <Grid item xs={12}>
          <Paper className="settings-box">
            <Typography variant="h6">Notifications</Typography>
            <FormControl>
              <Typography>Enable Notifications</Typography>
              <Switch
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
              />
            </FormControl>
          </Paper>
        </Grid>

        {/* Payment Integration */}
        <Grid item xs={12} sm={6}>
          <Paper className="settings-box">
            <Typography variant="h6">Payment Gateway</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Choose Payment Gateway</InputLabel>
              <Select
                value={paymentGateway}
                onChange={(e) => setPaymentGateway(e.target.value)}
                label="Choose Payment Gateway"
              >
                {paymentGateways.map((gateway) => (
                  <MenuItem key={gateway.value} value={gateway.value}>
                    {gateway.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        {/* Backup/Restore */}
        <Grid item xs={12}>
          <Paper className="settings-box">
            <Typography variant="h6">Data Backup & Restore</Typography>
            <Button variant="contained" color="primary" onClick={() => setBackup('backup')}>
              Backup Data
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setBackup('restore')}>
              Restore Data
            </Button>
          </Paper>
        </Grid>

        {/* Save Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveSettings}
            style={{ marginTop: '20px' }}
          >
            Save Settings
          </Button>
        </Grid>
      </Grid>

      {/* Snackbar for success message */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Settings saved successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SettingsPage;
