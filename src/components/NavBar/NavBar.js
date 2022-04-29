import React, { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Tooltip, Menu, MenuItem, Typography } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Personajes', 'Comics', 'Series', 'Historias'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' className='App-header'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <section className='Panel-header'>
            <img src='/logo.svg' alt='Marvel' className='App-logo' />
          </section>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {[pages].map((page) => (
              <Button
                key={page}
                onClick={handleCloseMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;