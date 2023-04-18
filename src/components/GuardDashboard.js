import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button,Typography,} from "@mui/material";

function GuardDashboard() {

  return (
    <div >
      <AppBar position="static" sx={{  height: "90px" , backgroundColor:"#64b5f6"}}>
        <Toolbar>
          <Typography variant="h6">
            Guard
          </Typography>
          <Button  sx={{display: "flex",
    justifyContent: "flex-end", marginTop:"20px"}} color="inherit" href="https://google.com">
            New Entry
          </Button>
          <Button color="inherit" href="https://facebook.com">
            Logs
          </Button>
          <Button color="inherit" href="https://twitter.com">
            Search 
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        {/* Your dashboard content goes here */}
      </div>
    </div>
  );
}

export default GuardDashboard;