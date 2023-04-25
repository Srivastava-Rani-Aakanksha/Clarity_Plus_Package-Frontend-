// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import { Paper,Button} from "@mui/material";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import axios from 'axios';
// import SendIcon from '@mui/icons-material/Send';
// import Alert from '@mui/material/Alert';
// // import 'firebase/auth';
// // import {sendEmailVerification, applyActionCode} from 'firebase/auth';
// // import {auth} from './firebase'

// function GuardSearchPage () {

//     const [searchID, setSearchID] = useState('');

//     const [loading, setLoading] = useState(false);

//     const [recipientDetails, setRecipientDetails] = useState([]);

//     const [verificationCode, setVerificationCode] = useState('');

//     const [verificationSuccess, setVerificationSuccess] = useState(false);

//     const [verificationError, setVerificationError] = useState(null);

//     const handleSearchID = (e) => {
//         setSearchID(e.target.value);
//     };

//     const handleSearch = async(e) => {
//       e.preventDefault();
//       console.log('Searching for institute ID:', searchID);
//       const response = await axios.get(`http://localhost:9001/order/ordersOfInstituteID/${searchID}/`)
//       .then(response => {
//           console.log(response.data);
//           setRecipientDetails(response.data);
//       })
//     };
//     const email = "yasha.dayal@iiitb.ac.in";
//     const sendVerificationCode = async () => {
//       //await auth.sendEmailVerification(email);
//       console.log('Verification code sent to', email);
//     };

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

//   return (
//     <div>
//       <TextField
//         label="Search"
//         variant="outlined"
//         value={searchID}
//         onChange={handleSearchID}
//       />
//       <IconButton onClick={(e) => handleSearch(e)}>
//         <SearchIcon />
//       </IconButton>
//       <TableContainer sx={{marginTop:'20px'}} component={Paper}>
//           <Table sx={{ minWidth: 500 }} aria-label="simple table">
//               <TableHead>
//                   <TableRow>
//                       <TableCell>OrderIDs</TableCell>
//                   </TableRow>
//               </TableHead>
//               <TableBody>
//                 {recipientDetails.map((row) => (
//                     <TableRow key = {row}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                         <TableCell>{row}</TableCell>
//                         <TableCell align="right">
//                         </TableCell>
//                         <TableCell>
//                         </TableCell>
//                     </TableRow>
//                 ))
//                 }
//                  <Alert severity="info">If there is any order yet to receive first fill the form for corresponding orderID.</Alert>
//                 </TableBody>
//           </Table>
//       </TableContainer>
//       <Button variant="contained" endIcon={<SendIcon />} onClick={sendVerificationCode}>
//         Send OTP
//       </Button>
//       {/* <input
//         type="text"
//         placeholder="Enter verification code"
//         value={verificationCode}
//         onChange={e => setVerificationCode(e.target.value)}
//       />
//       <button onClick={verifyCode}>Verify Code</button> */}
//     </div>
//   );
// };

// export default GuardSearchPage;
