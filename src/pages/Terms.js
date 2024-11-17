// src/pages/TermsOfService.js
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

const TermsOfService = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom><br/>
        Terms of Service
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to Phoenix POS! These Terms of Service ("Terms") govern your use of our application and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our Services.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By creating an account and using Phoenix POS, you agree to comply with and be legally bound by these Terms, as well as our Privacy Policy. Phoenix POS reserves the right to modify these Terms at any time. Continued use of the Services constitutes acceptance of any changes.
      </Typography>

      <Typography variant="h5" gutterBottom>
        2. Use of Services
      </Typography>
      <Typography variant="body1" paragraph>
        Phoenix POS provides a comprehensive Point of Sale system designed to streamline your business operations. You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </Typography>

      <Typography variant="h5" gutterBottom>
        3. User Responsibilities
      </Typography>
      <Typography variant="body1" paragraph>
        - **Accurate Information**: You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.
      </Typography>
      <Typography variant="body1" paragraph>
        - **Security**: You are responsible for safeguarding your password and other login credentials. Notify Phoenix POS immediately of any unauthorized use of your account.
      </Typography>
      <Typography variant="body1" paragraph>
        - **Compliance**: You agree to comply with all applicable local, state, national, and international laws and regulations.
      </Typography>

      <Typography variant="h5" gutterBottom>
        4. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All content, features, and functionality of Phoenix POS, including but not limited to text, graphics, logos, and software, are the exclusive property of Phoenix POS or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </Typography>

      <Typography variant="h5" gutterBottom>
        5. Termination
      </Typography>
      <Typography variant="body1" paragraph>
        Phoenix POS reserves the right to suspend or terminate your account and access to the Services at its sole discretion, without notice, for conduct that Phoenix POS believes violates these Terms or is harmful to other users of the Services, Phoenix POS, or third parties.
      </Typography>

      <Typography variant="h5" gutterBottom>
        6. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        To the fullest extent permitted by law, Phoenix POS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use, or alteration of your transmissions or content.
      </Typography>

      <Typography variant="h5" gutterBottom>
        7. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
      </Typography>

      <Typography variant="h5" gutterBottom>
        8. Changes to Terms
      </Typography>
      <Typography variant="body1" paragraph>
        Phoenix POS reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </Typography>

      <Typography variant="h5" gutterBottom>
        9. Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about these Terms, please contact us at{' '}
        <Link href="/contact" color="inherit" underline="none">
          Contact Us
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default TermsOfService;
