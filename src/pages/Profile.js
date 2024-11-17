// src/pages/Profile.js
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Avatar,
  Snackbar,
  Alert,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Profile = () => {
  // State to manage user profile data
  const [profile, setProfile] = useState({
    firstName: 'Jack',
    lastName: 'Oluoch',
    email: 'jackoluoch345@gmail.com',
    phone: '+254794536415',
    avatar: '', // Profile picture URL or Base64 string
  });

  // State for password update
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showPassword: false,
  });

  // State for notifications
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success' | 'error' | 'warning' | 'info'
  });

  // Function to handle profile changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  // Function to handle password changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  // Handle avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert the file to a Base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Placeholder function for saving profile changes
  const handleSaveProfile = () => {
    // Here you would typically send the updated profile to your backend
    // For demonstration, we'll just show a success snackbar
    setOpenSnackbar({
      open: true,
      message: 'Profile saved successfully!',
      severity: 'success',
    });
  };

  // Placeholder function for saving password changes
  const handleSavePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setOpenSnackbar({
        open: true,
        message: 'Please fill in all password fields.',
        severity: 'error',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setOpenSnackbar({
        open: true,
        message: 'New passwords do not match.',
        severity: 'error',
      });
      return;
    }

    // Here you would typically send the password data to your backend for updating
    // For demonstration, we'll just show a success snackbar
    setOpenSnackbar({
      open: true,
      message: 'Password updated successfully!',
      severity: 'success',
    });

    // Clear password fields
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      showPassword: false,
    });
  };

  // Handle closing of snackbar
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ padding: { xs: '10px', sm: '20px' }, maxWidth: '800px', margin: '0 auto' }}><br/><br/>
      <Typography variant="h4" gutterBottom display="flex" alignItems="center">
        <AccountCircleIcon sx={{ mr: 1 }} />
        Profile Management
      </Typography>

      {/* Profile Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            {/* Avatar Upload */}
            <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src={profile.avatar}
                alt={`${profile.firstName} ${profile.lastName}`}
                sx={{ width: 100, height: 100, mb: 1 }}
              />
              <label htmlFor="avatar-upload">
                <input
                  accept="image/*"
                  id="avatar-upload"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleAvatarChange}
                />
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<PhotoCamera />}
                  size="small"
                >
                  Upload
                </Button>
              </label>
            </Grid>

            {/* Personal Information Fields */}
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleProfileChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleProfileChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    type="email"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                    type="tel"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button variant="contained" color="primary" onClick={handleSaveProfile}>
              Save Profile
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Change Password Card */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Change Password
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Current Password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                type={passwordData.showPassword ? 'text' : 'password'}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {passwordData.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="New Password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                type={passwordData.showPassword ? 'text' : 'password'}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Confirm New Password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                type={passwordData.showPassword ? 'text' : 'password'}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button variant="contained" color="secondary" onClick={handleSavePassword}>
              Update Password
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={openSnackbar.severity} sx={{ width: '100%' }}>
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Profile;
