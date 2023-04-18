import React , { useState } from 'react';
import {  Button,TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import GuardDashboard from './GuardDashboard';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(orderid,firstname, lastname,retailer) {
    return { orderid,firstname, lastname,retailer };
  }
  
  

  
  function GuardAddOrderPage() {

    const [inputField,setInputFields] =useState([
        {orderid : "",firstname:"",lastname:"",retailer:""}
    ])

    const handleFormChange=(index,event)=>{
        let data=[...inputField]
        data[index][event.target.name]=event.target.value;
        setInputFields(data)
    }

    const addFields=(event)=>{
        event.preventDefault();
        let newField={orderid : "",firstname:"",lastname:"",retailer:""}
        setInputFields([...inputField,newField])
    }
    // const removeFields=(index)=>{
    //     let data=[...inputField]
    //     data.slice(index,)
    //     setInputFields(data)
    // }

return (
    <>
    <GuardDashboard/>
    <Paper elevation={16} sx={{marginTop:'50px',marginLeft:'30px' , marginRight:'30px' }}>
         <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700,}} aria-label="customized table">
        <TableHead>
        <TableRow>
            <StyledTableCell align="center" >Order Id</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Retailer</StyledTableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {inputField.map((input,index) => (
            <StyledTableRow key={index.name}>
                <StyledTableCell >
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Order Id"
                        name="orderid" 
                        value={input.orderid}
                        onChange={(e)=>handleFormChange(index,e)}/>
                </StyledTableCell>
                <StyledTableCell >
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="First Name"
                        name="firstname" 
                        value={input.firstname}
                        onChange={(e)=>handleFormChange(index,e)}/>
                </StyledTableCell>
                <StyledTableCell>
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="Last Name"
                        name="lastname" 
                        value={input.lastname}
                        onChange={(e)=>handleFormChange(index,e)}/>
                </StyledTableCell>
                <StyledTableCell >
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Retailer"
                        name="retailer" 
                        value={input.retailer}
                        onChange={(e)=>handleFormChange(index,e)}/>
                </StyledTableCell>
                {/* <StyledTableCell >
                    <button onClick={()=>removeFields(index)}> remove </button>
                </StyledTableCell> */}
            </StyledTableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    {inputField.length<=4 && <Button
        sx={{backgroundColor: "#e3f2fd" , mt: 1,color: "#0d47a1"}}
        type="submit"
        fullWidth
        variant="outline"
        // sx={{ mt: 1}}
        onClick={addFields}
    >
        Add more +
    </Button>}
    <Button type="submit"
        fullWidth
        variant="outline" sx={{marginTop:'20px' , backgroundColor: "#e3f2fd" , mt: 1,color: "#0d47a1"}}>
        Submit Details
    </Button>
    </Paper> 
    </>  
);
}

 export default GuardAddOrderPage ;  