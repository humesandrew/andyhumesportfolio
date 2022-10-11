
import "./footer.css";
import resumeData from "../../resumeData.js";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { blueGrey } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box className='footerBox' sx={{ flexGrow: 1 }}>
      
        
        <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              Portfolio developed by Andy Humes, 2022. 
        </Typography>
       
      
    </Box>
  );
}


