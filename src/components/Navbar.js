import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Badge,
  Grid,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AssessmentIcon from '@mui/icons-material/Assessment'; // Reports Icon
import ReceiptIcon from '@mui/icons-material/Receipt'; // Receipt Icon
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact Icon
import InfoIcon from '@mui/icons-material/Info'; // About Icon
import GavelIcon from '@mui/icons-material/Gavel'; // Terms of Service Icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Cart Icon
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Sales Analytics Icon
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar, cartItemCount }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#1976d2', // Primary color for the navbar
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: '80px', // Increased height for better visibility
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)', // Subtle shadow for depth
        transition: 'height 0.3s ease-in-out', // Smooth transition for height changes
      }}
    >
      <Toolbar
        sx={{
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Space out the logo and icons
          minHeight: '80px', // Ensure toolbar matches the Navbar height
        }}
      >
        {/* Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          sx={{ padding: '8px' }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Logo/Title */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: '1.8rem', // Increased font size for prominence
            fontWeight: 'bold',
            color: 'white', // Title color
            textAlign: 'center',
            flexGrow: 1, // Allow logo/title to grow and take available space
          }}
        >
          BigSeller
        </Typography>

        {/* Grid Layout for Icons */}
        <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
          {[
            { label: 'Reports', icon: <AssessmentIcon />, link: '/reports' },
            { label: 'Sales Analytics', icon: <TrendingUpIcon />, link: '/Analytics' }, // Sales Analytics Icon
            { label: 'Receipt', icon: <ReceiptIcon />, link: '/receipt' },
            { label: 'About', icon: <InfoIcon />, link: '/about' },
            { label: 'Terms of Service', icon: <GavelIcon />, link: '/terms' },
            { label: 'Contact', icon: <ContactMailIcon />, link: '/contact' },
          ].map(({ label, icon, link }) => (
            <Grid item key={link}>
              <Tooltip title={label} arrow>
                <Box
                  sx={{
                    border: '1px solid white', // Border for the icon box
                    borderRadius: '8px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    bgcolor: 'transparent',
                    transition: 'background-color 0.3s, transform 0.2s', // Smooth transition
                    '&:hover': {
                      bgcolor: '#transparent', // Change background on hover
                      transform: 'scale(1.05)', // Slight scale effect on hover
                    },
                  }}
                >
                  <IconButton
                    component={Link}
                    to={link}
                    color="inherit"
                    aria-label={label.toLowerCase()}
                    sx={{ padding: '0', color: 'white' }} // No padding to fit the icon perfectly
                  >
                    {icon}
                  </IconButton>
                  <Typography variant="caption" sx={{ color: 'white' }}>
                    {label}
                  </Typography>
                </Box>
              </Tooltip>
            </Grid>
          ))}

          {/* Cart Icon with Badge */}
          <Grid item>
            <Tooltip title="View Cart" arrow>
              <IconButton
                component={Link}
                to="/cart"
                color="inherit"
                aria-label="cart"
                sx={{ padding: '8px' }}
              >
                <Badge badgeContent={cartItemCount} color="error">
                  <ShoppingCartIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
