import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs'; 
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';

function SearchLogByDate (){

    const [search, setSearch] = useState('');
    const [isDatePicker, setIsDatePicker] = useState(false);
    const [dateSelected, setDateSelected] = useState('');
    const [logsByID, setLogsByID] = useState([]);
    const [logsByDate, setLogsByDate] = useState([]);
    const [visibleTableID, setVisibleTableID] = useState(false);
    const [visibleTableDate, setVisibleTableDate] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isIcon, setIsIcon] = useState(false);

    useEffect(() => {
      console.log(isToggled);
    }, [isToggled]);

    const handleToggle = () => {
      setIsToggled(!isToggled);
      if(visibleTableID === true)
          setVisibleTableID(false);
      if(visibleTableDate === true)
          setVisibleTableDate(false); 
    };  

    const handleSearch = (e) => {
        console.log(e.target.value);
        if(e.target.value === '20'){
            setIsDatePicker(true);
        }
        else{
            setIsDatePicker(false);
        }
        setSearch(e.target.value);
    };

    const handleSearchLogs = async(e) => {
        e.preventDefault();
        if(isToggled === false){
            const searchToUpper = search.toUpperCase();
            console.log(searchToUpper);
            await axios.get(`http://localhost:9001/order/search/logsbyID/${searchToUpper}/`)
            .then((response)=>{
            setVisibleTableID(true);
            console.log(response.data);
            setLogsByID(response.data);
            })
            .catch((error)=>{
            console.log(error);
            }) 
        }
        else if(isToggled === true)
        {
            console.log("Yasha");
            const formattedDate = dayjs(dateSelected).format('YYYY-MM-DD');
            console.log(formattedDate);
            await axios.get(`http://localhost:9001/order/search/logsbydate/${formattedDate}/`)
            .then((response)=>{
            setVisibleTableDate(true);
            console.log(response.data);
            setLogsByDate(response.data);
            })
            .catch((error)=>{
            console.log(error);
            }) 
        }
    };

    return (
        <div>
          {isToggled ? (  
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Alert severity="info">If searching by date, kindly use this format : YYYY-MM-DD </Alert>
              <DatePicker label="Logs for Date" 
              value={dateSelected}
              onChange={(date) => {setDateSelected(date)}
              }
              />
              
            </LocalizationProvider> 
          ) : (
            <TextField
              label="Search"
              variant="outlined"
              value={search}
              onChange={handleSearch}
            />
          )}
          
          <IconButton onClick={handleSearchLogs} >
            <SearchIcon />
          </IconButton>
          <Switch {...label} defaultChecked onChange={handleToggle}/>
          {visibleTableDate && 
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Retailer</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {logsByDate.map((row, index) => {
                    const splittedData = row.split(",");
                    console.log(splittedData);
                    return (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{splittedData[0]}</TableCell>
                        <TableCell align="right">{splittedData[1]}</TableCell>
                        <TableCell align="right">{splittedData[2]}</TableCell>
                        <TableCell align="right">{splittedData[3]}</TableCell>
                      </TableRow>
                      );
                    })}
                    </TableBody>
                  </Table>
                </TableContainer>
                }
          {visibleTableID && 
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>OrderID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Retailer</TableCell>
              <TableCell align="right">Received</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {logsByID.map((row, index) => {
          const splittedData = row.split(",");
          console.log(splittedData);
          return (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{splittedData[0]}</TableCell>
            <TableCell align="right">{splittedData[1]}</TableCell>
            <TableCell align="right">{splittedData[2]}</TableCell>
            <TableCell align="right">{splittedData[3]}</TableCell>
            <TableCell align="right">
            {splittedData[4] === "true" ? (
              <RadioButtonChecked color="primary">Delivered</RadioButtonChecked>
            ) : (
              <RadioButtonUnchecked color="primary">Not Delivered</RadioButtonUnchecked>
            )}
            </TableCell>
            </TableRow>
            );
          })}
          </TableBody>
        </Table>
      </TableContainer>
      }
  </div>
);
};

export default SearchLogByDate;