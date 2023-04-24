import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button,Typography,} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

function GuardDashboard() {

  return (
    <>
      <AppBar position="static" sx={{  height: "90px" , backgroundColor:"#0d47a1"}}>
        <Toolbar>
            <Avatar sx={{marginTop:'20px', marginRight:'2opx',bgcolor: '#9e9e9e'}} > G </Avatar>
            <Typography variant="h6" sx={{ flexGrow: 1,
              fontWeight: 700,
              color: 'white',
              fontSize: '1.6rem',
              textDecoration: 'none',
              marginTop:"20px",
              marginLeft: "10px"}}>
            Guard
            </Typography>
            <Button  sx={{ flexGrow:0,
              fontWeight: 700,
              color: 'white',
              textDecoration:'underline',
              fontSize: '1.2rem',
              marginTop:"20px",
              marginRight: "20px"}} 
              href="/guardaddorderpage">
            Add Order+
            </Button>
            <Button sx={{ 
              fontWeight: 700,
              color: 'white',
              textDecoration: 'underline',
              fontSize: '1.2rem',
              marginTop:"20px",
              marginRight: "20px"}} href="/userformpage">
            Logs
            </Button>
            <Button sx={{ 
                fontWeight: 700,
                color: 'white',
                textDecoration: 'underline',
                fontSize: '1.2rem',
                marginTop:"20px",}}  href="https://twitter.com">
                Search 
            </Button>
            <Avatar sx={{ bgcolor:'#9e9e9e',marginTop:'20px',width: 35, height: 35 }} variant="rounded">
                <SearchIcon />
            </Avatar>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default GuardDashboard;
