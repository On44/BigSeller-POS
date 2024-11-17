import React from 'react';
import { Box, Card, CardContent, Typography, Divider, Grid, Avatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const About = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom><br/>
        <InfoIcon sx={{ mr: 1 }} />
        About Phoenix POS
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            System Purpose
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" paragraph>
            Phoenix POS is designed to streamline business operations by providing an intuitive, easy-to-use Point of Sale system. It supports real-time sales tracking, inventory management, and comprehensive reporting, making it suitable for small to medium-sized businesses.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Version Information
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1">
            Current Version: <strong>v1.0.0</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Release Date: September 2024
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Development Credits
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Avatar alt="Developer 1" src="/static/images/avatar1.jpg" sx={{ width: 56, height: 56 }} />
              <Typography variant="body1">Jack Oluoch</Typography>
              <Typography variant="body2" color="textSecondary">
                Lead Developer
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Avatar alt="Developer 2" src="/static/images/avatar2.jpg" sx={{ width: 56, height: 56 }} />
              <Typography variant="body1">Nelius Wendy</Typography>
              <Typography variant="body2" color="textSecondary">
                UI/UX Designer
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
