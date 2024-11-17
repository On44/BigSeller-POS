import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#eaeff1' }}>
      {/* Navbar at the top */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main content: Sidebar + Page content */}
      <Box sx={{ display: 'flex', flex: 1, mt: '80px' /* Ensure content is below the Navbar */ }}>
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

        {/* Main Page Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: '#ffffff',
            p: 3,
            ml: collapsed ? '70px' : '250px', // Adjust margin based on sidebar width
            transition: 'margin-left 0.3s',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
            minHeight: 'calc(100vh - 80px)', // Full height minus the navbar height
          }}
        >
          {children} {/* Render your main page content here */}
        </Box>
      </Box>

      {/* Footer at the bottom */}
      <Footer />
    </Box>
  );
};

export default Layout;
