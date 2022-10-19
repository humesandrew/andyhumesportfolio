import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import "./credentials.css";
import resumeData from "../../resumeData.js";


import { styled } from "@mui/material/styles";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Credentials() {
  return (
    <Container className="credentialsContainer">
      <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              sx={{
                
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >Skills
              </Typography>

              <Box className="credentialsBox" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="credentialsLeft">
        <Grid item md={9} sm={12} xs={12} className="credentialsGrid">
          <Item>
       

            <h1>These will be skills icons</h1>
          </Item>
        </Grid>
        <Grid item md={3} sm={12} xs={12} className="rightCredentialsGrid">
         
        <Typography
              variant="h5"
              noWrap
              sx={{
                
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >Education
              </Typography>
         <Grid item md={12} sm={12} xs={12}>
          <Item>
       

            <h4 className="duItem">University of Denver</h4>
            <p className="duText">Certificate of Completion: Full Stack Web Development </p>
          </Item>
        </Grid>
           
        <Grid item md={12} sm={12} xs={12}>
          <Item>
       

            <h4 className="csuItem">Colorado State University</h4>
            <p className="csuText">Master of Biomedical Science</p>
          </Item>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Item>
       

            <h4 className="osuItem">The Ohio State University</h4>
            <p className="osuText">Bachelor of Science: Molecular Biology</p>
            <p className="osuText">Bachelor of Arts: Anthropology</p>
          </Item>
        </Grid>
        </Grid>
        </Grid>
        </Box>
    </Container>
  );
}
