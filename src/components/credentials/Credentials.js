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

              <Box className="credentialsLeft" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="leftCredentialsGrid">
        <Grid item md={5} sm={12} xs={12}>
          <Item>
       

            <h1>Welcome to my portfolio.</h1>
          </Item>
        </Grid>
        <Grid item md={7} sm={12} xs={12} className="rightCredentialsGrid">
         
            <p>
              Determined, junior level coder versed in many coding languages
              with proficiency in the front end frameworks. Offers a unique
              adaptability, stemming from a heavy background in technical
              skills, complex systems, and analysis. Strong customer service
              background from many years in health care.
            </p>
           
            <p>
              Determined, junior level coder versed in many coding languages
              with proficiency in the front end frameworks. Offers a unique
              adaptability, stemming from a heavy background in technical
              skills, complex systems, and analysis. Strong customer service
              background from many years in health care.
            </p>
        </Grid>
        </Grid>
        </Box>
    </Container>
  );
}
