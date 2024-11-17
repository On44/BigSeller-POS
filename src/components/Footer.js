// src/components/Footer.js
import React from 'react';
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1976d2', // Background color
        color: 'white', // Text color
        textAlign: 'center', // Center text alignment
        p: 2, // Padding
        mt: 'auto', // Push footer to the bottom of the page
        position: 'relative',
        width: '100%', // Full width
        fontSize: '0.875rem', // Smaller font size for the footer content
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" sx={{ mb: 0.5 }}>Quick Links</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Link href="/privacy" color="inherit" sx={{ fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" color="inherit" sx={{ fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
            <Link href="/contact" color="inherit" sx={{ fontSize: '0.875rem' }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" sx={{ mb: 0.5 }}>Follow Us</Typography>
          <Box>
            <IconButton color="inherit" href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ p: 0.5 }}>
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href="https://www.twitter.com" target="_blank" rel="noopener" sx={{ p: 0.5 }}>
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ p: 0.5 }}>
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank" rel="noopener" sx={{ p: 0.5 }}>
              <LinkedIn fontSize="small" />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" sx={{ mb: 0.5 }}>Contact Us</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Email: support@phoenixpos.com</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Phone: +254 794 536 415</Typography>
        </Grid>
      </Grid>

      {/* Copyright information */}
      <Typography variant="caption" sx={{ display: 'block', mt: 2, fontSize: '0.75rem' }}>
        &copy; {new Date().getFullYear()} Phoenix POS. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
