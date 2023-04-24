import React , {useState} from 'react';
import { Button,TextField,Box,Grid
,Typography, FormControl,Paper,} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'; 
import imgPath from './Images/service-fast-delivery-parcels-vector-illustration-express-delivery-courier-service-smiling-man-courier-orange-uniform-with-box-his-hands-flat-style-eps-10_669518-23.avif';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Header from "./Header";
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> 4f241f581e084fe3738929e31f4284abc692aeeb

const UserFormPage=() =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [orderId, setOrderId] = useState('');
    const [instituteId, setInstituteId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [retailer, setRetailer] = useState('');
    
    const handleSubmit = (e) => {
<<<<<<< HEAD
      e.preventDefault();
      console.log({
        firstName,
        lastName,
        orderId,
        instituteId,
        phoneNumber,
        retailer
      });
      setFirstName('');
      setLastName('');
      setOrderId('');
      setInstituteId('');
      setPhoneNumber('');
      setRetailer('');
      
=======
        e.preventDefault();
        const data = {
        RecipientFirstName:firstName,
        RecipientLastName:lastName,
        OrderID:orderId,
        InstituteID:instituteId,
        RecipientPhoneNumber:phoneNumber,
        Retailer:retailer
    };
      const response = axios.post(`http://localhost:9002/recipient/savedata`,data)
      .then(response=>{
        console.log(response);
        setFirstName('');
        setLastName('');
        setOrderId('');
        setInstituteId('');
        setPhoneNumber('');
        setRetailer('');
        alert('Data submitted successfully !')
      })
      .catch(error=>{
        console.error(error);
      });
>>>>>>> 4f241f581e084fe3738929e31f4284abc692aeeb
    };
   
    return(
        <>
         <Header/>
        <Grid container spacing={2}>
            <Grid item xs={8} >
<<<<<<< HEAD
                <Paper sx={{padding:'32px'}} elevation={2}>
=======
>>>>>>> 4f241f581e084fe3738929e31f4284abc692aeeb
                <Typography variant="h5" sx={{ textAlign: 'center' , marginTop:'30px',  '&:hover': {
                backgroundColor:'primary.light'}}}>Fill Your Order Details</Typography>

                <Box component="form" sx={{backgroundColor:'white'}} 
                    onSubmit={handleSubmit}
                    >
                    <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ marginTop:'10px'}}>
                        <Grid item xs={12} sm={6.1} >
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={(e) =>setFirstName(e.target.value)}
                            />
                    </Grid>
                    <Grid item xs={12} sm={6.1} >
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={(e) =>setLastName(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Order ID"
                            name="orderid"
                            value={orderId}
                            onChange={(e) =>setOrderId(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Institute ID"
                            name="instituteid"
                            value={instituteId}
                            onChange={(e) =>setInstituteId(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <TextField
<<<<<<< HEAD
                        variant="outlined"
                        required
                        fullWidth
                        label="Phone Number"
                        name="Phone Number"
                        value={phoneNumber}
                        onChange={(e) =>setPhoneNumber(e.target.value)}
                        inputProps={{ maxLength: 10 }} 
                        InputProps={{ inputMode: 'tel' }} 
        
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <FormControl required sx={{ minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Retailer</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            label="retailer *"
                            value={retailer} 
                            onChange={(e) =>setRetailer(e.target.value)}>
                            <MenuItem value={'Myntra'}>Myntra</MenuItem>
                            <MenuItem value={'Amazon'}>Amazon</MenuItem>
                            <MenuItem value={'Flipkart'}>Flipkart</MenuItem>
                            <MenuItem value={'Ajio'}>Ajio</MenuItem>
                            <MenuItem value={'Blue-Dart'}>Blue-Dart</MenuItem>
                            <MenuItem value={'Urbanic'}>Urbanic</MenuItem>
                        </Select>
                        </FormControl>
=======
                            variant="outlined"
                            required
                            fullWidth
                            label="Phone Number"
                            name="Phone Number"
                            value={phoneNumber}
                            onChange={(e) =>setPhoneNumber(e.target.value)}
                            inputProps={{ maxLength: 10 }} 
                            InputProps={{ inputMode: 'tel' }} 
            
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                            <FormControl required sx={{ minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-autowidth-label">retailer
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    label="retailer *"
                                    value={retailer} 
                                    onChange={(e) =>setRetailer(e.target.value)}>
                                    <MenuItem value={'Myntra'}>Myntra</MenuItem>
                                    <MenuItem value={'Amazon'}>Amazon</MenuItem>
                                    <MenuItem value={'Flipkart'}>Flipkart</MenuItem>
                                    <MenuItem value={'Ajio'}>Ajio</MenuItem>
                                    <MenuItem value={'Blue-Dart'}>Blue-Dart</MenuItem>
                                    <MenuItem value={'Urbanic'}>Urbanic</MenuItem>
                                </Select>
                            </FormControl>
>>>>>>> 4f241f581e084fe3738929e31f4284abc692aeeb
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1,backgroundColor:'#4fc3f7'}}
                            >
                                Submit
                            </Button>
                        </Grid>
                
                    </Grid> 
                </Box> 
<<<<<<< HEAD
                </Paper>
=======
>>>>>>> 4f241f581e084fe3738929e31f4284abc692aeeb
            </Grid>
           <Grid item xs={4}>
           <img
            src= {imgPath}
            style={{ marginTop:'60px' , width:'80%', height:'80%'}}
            />
           </Grid>
       
        </Grid>
        
        </>      
 )
}
export default UserFormPage