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

    const [loading, setLoading] = useState(false);

    const [recipientDetails, setRecipientDetails] = useState([]);

    const [verificationCode, setVerificationCode] = useState('');

    const [verificationSuccess, setVerificationSuccess] = useState(false);

    const [verificationError, setVerificationError] = useState(null);

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
    // const email = "yasha.dayal@iiitb.ac.in";
    // const sendVerificationCode = async () => {
    //   await auth.sendEmailVerification(email);
    //   console.log('Verification code sent to', email);
    // };

//   const verifyCode = () => {
//     applyActionCode(auth, verificationCode)
//     .then(() => {
//       console.log('Verification successful');
//       setVerificationSuccess(true);
//       setVerificationError(null);
//     })
//     .catch(error => {
//       console.error('Error verifying code:', error);
//       setVerificationSuccess(false);
//       setVerificationError(error.message);
//     });
//   };

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
      {/* <TableContainer sx={{marginTop:'20px'}} component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>OrderIDs</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {recipientDetails.map((row) => (
                    <TableRow key = {row}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{row}</TableCell>
                        <TableCell align="right">
                        </TableCell>
                        <TableCell>
                        </TableCell>
                    </TableRow>
                ))
                }
                {recipientDetails.length===0 && 
                 <Alert severity="info">If there is any order yet to receive first fill the form for corresponding orderID.</Alert>
                }
                </TableBody>
          </Table>
      </TableContainer> */}
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
    </Paper>
    
      {/* <Button variant="contained" endIcon={<SendIcon />} onClick={sendVerificationCode}>
        Send OTP
      </Button>
      <input
        type="text"
        placeholder="Enter verification code"
        value={verificationCode}
        onChange={e => setVerificationCode(e.target.value)}
      />
      <button onClick={verifyCode}>Verify Code</button> */}
    </>
  );
};

export default GuardSearchPage;
