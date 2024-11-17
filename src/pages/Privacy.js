// src/pages/Privacy.js
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

const Privacy = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom><br/>
        Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to Phoenix POS! Your privacy is critically important to us. At Phoenix POS, we have a few fundamental principles:
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>1. We don’t ask for personal information unless we truly need it.</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>2. We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>3. We don’t store personal information on our servers unless required for the on-going operation of one of our services.</strong>
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        1. Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We collect several types of information for various purposes to provide and improve our Service to you.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Personal Data
      </Typography>
      <Typography variant="body1" paragraph>
        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
      </Typography>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Cookies and Usage Data</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        Usage Data
      </Typography>
      <Typography variant="body1" paragraph>
        We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Tracking & Cookies Data
      </Typography>
      <Typography variant="body1" paragraph>
        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
      </Typography>
      <ul>
        <li><strong>Cookies:</strong> Cookies are files with small amounts of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.</li>
        <li><strong>Use of Cookies:</strong> We use cookies to improve and personalize our Service, to track user activity, and to manage user sessions.</li>
        <li><strong>Third-Party Cookies:</strong> We may use third-party services that employ cookies and similar technologies to analyze trends, administer the Service, track users' movements around the Service, and gather demographic information about our user base as a whole.</li>
      </ul>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        2. Use of Data
      </Typography>
      <Typography variant="body1" paragraph>
        Phoenix POS uses the collected data for various purposes:
      </Typography>
      <ul>
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our Service</li>
        <li>To monitor the usage of our Service</li>
        <li>To detect, prevent, and address technical issues</li>
      </ul>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        3. Transfer of Data
      </Typography>
      <Typography variant="body1" paragraph>
        Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
      </Typography>
      <Typography variant="body1" paragraph>
        If you are located outside [Your Country] and choose to provide information to us, please note that we transfer the data, including Personal Data, to [Your Country] and process it there.
      </Typography>
      <Typography variant="body1" paragraph>
        Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        4. Disclosure of Data
      </Typography>
      <Typography variant="body1" paragraph>
        We may disclose personal information that we collect, or you provide:
      </Typography>
      <ul>
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of Phoenix POS</li>
        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>To protect the personal safety of users of the Service or the public</li>
        <li>To protect against legal liability</li>
      </ul>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        5. Security of Data
      </Typography>
      <Typography variant="body1" paragraph>
        The security of your data is important to us but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        6. Your Data Protection Rights
      </Typography>
      <Typography variant="body1" paragraph>
        Depending on your location, you may have the following rights regarding your personal data:
      </Typography>
      <ul>
        <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
        <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
        <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
        <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
        <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
      </ul>
      <Typography variant="body1" paragraph>
        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us through the contact information provided below.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        7. Children's Privacy
      </Typography>
      <Typography variant="body1" paragraph>
        Our Service does not address anyone under the age of 18 ("Children").
      </Typography>
      <Typography variant="body1" paragraph>
        We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        8. Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </Typography>
      <Typography variant="body1" paragraph>
        We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
      </Typography>
      <Typography variant="body1" paragraph>
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        9. Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about this Privacy Policy, please contact us:
      </Typography>
      <Typography variant="body1" paragraph>
        By email: <Link href="mailto:support@phoenixpos.com">support@phoenixpos.com</Link>
      </Typography>
    </Box>
  );
};

export default Privacy;
