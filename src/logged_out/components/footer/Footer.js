import React from 'react';
import { Container, Grid, Box, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Product Section */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom align="center">
              Product
            </Typography>
            <Link href="#" variant="body1" display="block" gutterBottom align="center">
              Cleantracks
            </Link>
          </Grid>

          {/* Resource Section */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom align="center">
              Resource
            </Typography>
            <Link href="#" variant="body1" display="block" gutterBottom align="center">
              Terms
            </Link>
            <Link href="#" variant="body1" display="block" gutterBottom align="center">
              PrivatePolicy
            </Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom align="center">
              Contact
            </Typography>
            <Box display="flex" justifyContent="center">
              <IconButton href="https://github.com/jianshao" aria-label="GitHub" color="inherit">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://x.com/tian26395" aria-label="Twitter" color="inherit">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
