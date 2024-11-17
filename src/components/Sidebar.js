import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Home,
  Receipt,
  Category,
  Inventory,
  Group,
  AccountCircle,
  Settings,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const location = useLocation();
  const sidebarWidth = collapsed ? 70 : 250;

  // Sidebar menu items ordered by priority
  const menuItems = [
    { to: '/', text: 'Dashboard', icon: <Home /> },
    { to: '/sales', text: 'Sales', icon: <Receipt /> },
    { to: '/products', text: 'Products', icon: <Category /> },
    { to: '/inventory', text: 'Inventory', icon: <Inventory /> },
    { to: '/customer', text: 'Customer', icon: <Group /> },
    { to: '/profile', text: 'Profile', icon: <AccountCircle /> },
    { to: '/employees', text: 'Employees', icon: <Group /> },
    { to: '/settings', text: 'Settings', icon: <Settings /> },
  ];

  return (
    <Box
      sx={{
        width: sidebarWidth,
        height: '100vh',
        bgcolor: '#1976d2',
        color: 'white',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s',
        boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1200,
        overflowY: 'auto',
      }}
    >
      {/* Sidebar Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: collapsed ? 'center' : 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        {!collapsed && (
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
             
          </Typography>
        )}
        <IconButton onClick={toggleSidebar} sx={{ color: 'white' }}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: 'white', mb: 2 }} />

      {/* Sidebar Menu */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map(({ to, text, icon }, index) => (
          <React.Fragment key={to}>
            <Tooltip title={collapsed ? text : ''} placement="right">
              <ListItem
                button
                component={Link}
                to={to}
                sx={{
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  '&:hover': {
                    bgcolor: '#1565c0',
                  },
                  backgroundColor: location.pathname === to ? '#1565c0' : 'transparent',
                  borderRadius: '8px',
                  p: collapsed ? 1 : 1.5,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'springgreen',
                    borderRadius: '12px',
                    padding: '8px',
                    width: collapsed ? '40px' : '50px',
                    height: collapsed ? '40px' : '50px',
                    mb: collapsed ? 0 : 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: 'inherit',
                      fontSize: '2rem',
                      minWidth: 0,
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                </Box>
                {!collapsed && (
                  <ListItemText
                    primary={text}
                    sx={{
                      fontSize: '1rem',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  />
                )}
              </ListItem>
            </Tooltip>

            {/* Custom colored divider between icons */}
            {index < menuItems.length - 1 && (
              <Divider sx={{ bgcolor: '#FFA500', my: 1 }} />
            )}
          </React.Fragment>
        ))}
      </List>

      {/* Sidebar Footer */}
      {!collapsed && (
        <Box sx={{ textAlign: 'center', mt: 'auto' }}>
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} Phoenix POS
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
