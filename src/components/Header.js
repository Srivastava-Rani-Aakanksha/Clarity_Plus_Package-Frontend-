import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import imgPath from "./Images/unnamed.jpg"

const Header=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',}}}>
            Clarity Plus Package
          </Typography>
          <img
            src= {imgPath}
            style={{ width: 160, height: 90, marginLeft: 'auto' }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;