import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Paper,Button,Typography} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import { styled } from "@mui/material/styles";
import Alert from '@mui/material/Alert';
import 'firebase/auth';

import GuardDashboard from './GuardDashboard';
import { Form } from 'react-bootstrap';

// import {sendEmailVerification, applyActionCode} from 'firebase/auth';
// import {auth} from './firebase'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e3f2fd",
    color: theme.palette.common.black,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function GuardSearchPage () {

    const [searchID, setSearchID] = useState('');
    const [recipientDetails, setRecipientDetails] = useState([]);
    
    const handleSearchID = (e) => {
        setSearchID(e.target.value);
    };

    const handleSearch = async(e) => {
      e.preventDefault();
      console.log('Searching for institute ID:', searchID);
      const response = await axios.get(`http://localhost:9001/order/ordersOfInstituteID/${searchID}/`)
      .then(response => {
          console.log(response.data);
          setRecipientDetails(response.data);
      })
    };

  return (
    <>
    <GuardDashboard/>
    <Typography sx={{marginTop:'40px',marginLeft:'40px'}} variant='h5'> Enter Institute ID</Typography> 
      <Form onSubmit={(e) => handleSearch(e)}>
        <TextField sx={{marginTop:'20px',marginLeft:'40px'}} 
          label="Search"
          variant="outlined"
          size='small'
          value={searchID}
          onChange={handleSearchID}
        />
      <IconButton >
        <SearchIcon sx={{marginTop:'20px',marginLeft:'10px'}}  onClick={(e) => handleSearch(e)}/>
      </IconButton>
      </Form>
      <Paper elevation={16}
        sx={{ marginTop: "40px", marginLeft: "80px", marginRight: "80px" }}>
      <TableContainer>
        <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Order Id</StyledTableCell>
                <StyledTableCell align="center">Retailer</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipientDetails.map((row) => (
                      <TableRow key = {row}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell align="center">{row}</TableCell>
                          <TableCell align="center"></TableCell>
                      </TableRow>
                  ))
                }
            </TableBody>

        </Table>
      </TableContainer>
      <Button   
              variant="outline"
              sx={{
                size:"small",
                marginTop: "20px",
                backgroundColor: "#e3f2fd",
                mt: 1,
                color: "#0d47a1",
              }}
            >
              Send OTP

    </Button>
    </Paper>
    </>
  );
};

export default GuardSearchPage;
