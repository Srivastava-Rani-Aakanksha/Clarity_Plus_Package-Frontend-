import React from 'react';
import { Button,TextField,Box,Grid
,Typography, FormControl,Paper,} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'; 
import imgPath from './Images/service-fast-delivery-parcels-vector-illustration-express-delivery-courier-service-smiling-man-courier-orange-uniform-with-box-his-hands-flat-style-eps-10_669518-23.avif';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Header from "./Header";

const UserFormPage=() =>{
   
    return(
        <>
         <Header/>
        <Grid container spacing={2}>
            <Grid item xs={8} >
                <Paper sx={{padding:'32px'}} elevation={2}>
                <Typography variant="h5" sx={{ textAlign: 'center' , marginTop:'30px',  '&:hover': {
                backgroundColor:'primary.light'}}}>Fill Your Order Details</Typography>

                <Box component="form" sx={{backgroundColor:'white'}} 
                    // onSubmit={handleSubmit}
                    >
                    <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ marginTop:'10px'}}>
                        <Grid item xs={12} sm={6.1} >
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="First Name"
                            name="firstName"
                            />
                    </Grid>
                    <Grid item xs={12} sm={6.1} >
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Last Name"
                            name="lastName"
                        
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Order ID"
                            name="orderid"
                        
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Institute ID"
                            name="instituteid"
                        
                        />
                        </Grid>
                        <Grid item xs={12} sm={6.1} >
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Phone Number"
                        name="Phone Number"
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
                            label="Age *" >
                            <MenuItem value="">
                            <em>Others</em>
                            </MenuItem>
                            <MenuItem value={'Myntra'}>Myntra</MenuItem>
                            <MenuItem value={'Amazon'}>Amazon</MenuItem>
                            <MenuItem value={'Flipkart'}>Flipkart</MenuItem>
                            <MenuItem value={'Ajio'}>Ajio</MenuItem>
                            <MenuItem value={'Blue-Dart'}>Blue-Dart</MenuItem>
                        </Select>
                        </FormControl>
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
                </Paper>
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