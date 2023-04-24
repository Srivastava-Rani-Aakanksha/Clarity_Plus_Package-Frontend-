import { Paper,Grid  } from "@mui/material";
import React from "react";
import GuardDashboard from './GuardDashboard';
import imgPath from "./Images/a3881d69111f73aaeeb5452368968f5f.jpg"
const GuardLandingPage =() =>
{
    return(
        <>
        <GuardDashboard/>
        <img src={imgPath} style={{ display: "block", margin: "auto", width: "25%", height: "25%", textAlign: "center", verticalAlign: "middle",marginTop:"60px" }} />

        </>
    )
}

export default GuardLandingPage;