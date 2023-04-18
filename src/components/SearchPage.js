import React ,{ useCallback, useState } from "react";
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
// import { Search } from '@mui/icons-material';
import { Grid } from "@mui/material";
import { Search, SearchOffOutlined } from "@mui/icons-material";
import { Button, Input } from "@mui/material";

import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "@mui/icons-material/Search";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchPage =() =>{
    return(
        <>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField
                sx={{marginTop:'40px',marginLeft:'40px'}}
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                    endAdornment: (
                <InputAdornment position="end">
                    <IconButton>
                    <Search />
                    </IconButton>
                </InputAdornment> ),
                }}/>
            </Grid>
        </Grid>
    {/* <div>
      <Form>
        <TextField
          className="m-2"
          variant="standard"
          type="text"
          value={search}
          placeholder="Search here...."
          onChange={searchInput}
        />
        <Button
          color="inherit"
          variant="outlined"
          //   startIcon={<SearchIcon />}
          onClick={() => onSearch(search)}
        >
          Search
        </Button>

        {showDropdown && (
          <Dropdown
            style={{
              position: "absolute",
              backgroundColor: "#454140", // Set background color to white
              borderRadius: "4px", // Set border radius to create rounded corners
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)", // Add a box shadow for depth
              padding: "3px", // Add padding to create spacing between items
              zIndex: "9999",
              minWidth: "200px",
            }}
          >
            {data
              .filter((item) => {
                const searchItem = search.toLowerCase();
                const title = item.title.toLowerCase();
                return title.indexOf(searchItem) > -1;
              })
              .slice(0, 6)
              .map((item) => (
                <Dropdown.Item
                  key={item.bookId}
                  onClick={() => onDropdownClick(item.title)}
                  href="#/action-1"
                  style={{
                    // Add additional styling for each item
                    padding: "5px 10px", // Add padding to create spacing within each item
                  }}
                >
                  {item.title}
                </Dropdown.Item>
              ))}
          </Dropdown>
        )}
      </Form>
    </div> */}
    </>
  );
}
export default SearchPage;