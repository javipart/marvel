import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              noWrap
              component='div'
            >
              <img src='/logo.svg' alt='Marvel' className='App-logo' />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default NavBar;
