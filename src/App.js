import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Sales from './pages/Sales';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import EmployeeManagement from './pages/EmployeeManagement';
import Reports from './pages/Reports';
import InventoryManagement from './pages/InventoryManagement';
import Receipt from './pages/Receipt'; 
import CustomerManagement from './pages/CustomerManagement';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Analytics from './pages/Analytics';
import Discount from './pages/Discount';
import Employee from './pages/Employee';

const App = () => {
  const [settings, setSettings] = useState({
    userRole: 'Cashier',
    currency: 'USD',
    taxRate: 0.1,
    sessionTimeout: 30,
    enableNotifications: true,
    autoReorder: true,
  });

  const handleSettingsUpdate = (updatedSettings) => {
    setSettings(updatedSettings);
  };

  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar toggleSidebar={toggleSidebar} collapsed={collapsed} />

        <Box sx={{ display: 'flex', flexGrow: 1, backgroundColor: '#f4f5f7' }}>
          <Sidebar collapsed={collapsed} />

          <Box
            sx={{
              flexGrow: 1,
              padding: { xs: '16px', sm: '24px', md: '32px' },
              transition: 'margin-left 0.3s ease-in-out',
              marginLeft: collapsed ? '70px' : '250px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              minHeight: '100vh',
              overflow: 'auto',
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard settings={settings} />} />
              <Route path="/products" element={<Products settings={settings} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sales" element={<Sales settings={settings} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile settings={settings} />} />
              <Route path="/discount" element={<Discount />} />
              <Route
                path="/settings"
                element={<Settings settings={settings} onSettingsUpdate={handleSettingsUpdate} />}
              />
              <Route path="/employees" element={<EmployeeManagement settings={settings} />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/inventory" element={<InventoryManagement settings={settings} />} />
              <Route path="/receipt" element={<Receipt />} />
              <Route path="/customer" element={<CustomerManagement settings={settings} />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/analytics" element={<Analytics settings={settings} />} />
              <Route path="/employee" element={<Employee settings={settings} />} /> {/* New Route */}
            </Routes>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;
