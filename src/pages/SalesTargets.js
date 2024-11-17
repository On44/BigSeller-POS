// src/pages/SalesTargets.js
import React from 'react';
import { Box, Typography, LinearProgress, Grid, Card, CardContent } from '@mui/material';

const salesTargets = [
  { target: 'Monthly Sales', achieved: 7500, goal: 10000 },
  { target: 'Daily Sales', achieved: 500, goal: 800 },
  // Add more targets as needed
];

const SalesTargets = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Sales Targets
      </Typography>
      <Grid container spacing={2}>
        {salesTargets.map((item) => {
          const progress = (item.achieved / item.goal) * 100;
          return (
            <Grid item xs={12} sm={6} md={4} key={item.target}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    {item.target}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Ksh{item.achieved} / Ksh{item.goal}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                  <Typography variant="caption" display="block" align="right" sx={{ mt: 1 }}>
                    {progress.toFixed(2)}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SalesTargets;
