// src/pages/Contact.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Snackbar } from '@mui/material';
import { useForm } from 'react-hook-form'; // for form validation

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setOpenSnackbar(true);
    // Add logic for handling form submission (e.g., send to a backend or email service)
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom><br/>
        Contact Us
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        We’re here to help! Fill out the form below for any inquiries, support, or feedback. Our team will get back to you as soon as possible.
      </Typography>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              {...register('name', { required: 'Name is required' })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              {...register('subject', { required: 'Subject is required' })}
              error={!!errors.subject}
              helperText={errors.subject ? errors.subject.message : ''}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              {...register('message', { required: 'Message is required' })}
              error={!!errors.message}
              helperText={errors.message ? errors.message.message : ''}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ py: 1.5 }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Message sent successfully!"
      />

      {/* Contact Information */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1">
          Phone: +254 794 536 415
        </Typography>
        <Typography variant="body1">
          Email: support@phoenixpos.com
        </Typography>
        <Typography variant="body1">
          Address: 123 Phoenix POS Street, ABC Place, Westlands.
        </Typography>
      </Box>

      {/* Google Maps Embed */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Find Us on Google Maps
        </Typography>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12755242.302729184!2d33.13755190742053!3d0.02355998622767083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f107f8bae35a7%3A0x7aa793b7b25b1ad0!2sKenya!5e0!3m2!1sen!2ske!4v1694789370135!5m2!1sen!2ske"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

      {/* Live Chat Widget (Insert chat widget script) */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Live Chat Support
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Click the chat button on the bottom-right corner for real-time assistance.
        </Typography>
        {/* Embed your live chat widget (e.g., tawk.to, Intercom, etc.) */}
        {/* Example script:
        <script type="text/javascript">
          var Tawk_API = Tawk_API || {};
          var Tawk_LoadStart = new Date();
          (function () {
            var s1 = document.createElement('script');
            s1.src = 'https://embed.tawk.to/YOUR_WIDGET_ID/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            document.head.appendChild(s1);
          })();
        </script>
        */}
      </Box>
    </Box>
  );
};

export default Contact;
