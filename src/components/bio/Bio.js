import * as React from "react";
import Box from "@mui/material/Box";


import "./bio.scss";
import resumeData from "../../resumeData.js";
import LinksList from "../linkslist/LinksList";


import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Bio() {
  return (
    <Box className="bioContainer" sx={{ flexGrow: 1 }} id="Bio">
      <Grid container spacing={2} className="leftBioGrid">
        <Grid item md={5} sm={12} xs={12}>
          <Item>
            <img
              alt="Andy Humes - Junior Developer"
              src={resumeData.image}
              className="andyPic"
            ></img>

            <h1>Welcome to my portfolio.</h1>
            <h3><a href="mailto:humes.andrew@gmail.com" className="mailLink">humes.andrew@gmail.com</a></h3>
          </Item>
        </Grid>
        <Grid item md={7} sm={12} xs={12} className="rightBioGrid">
         
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
            <br></br>

<LinksList />
            
          <br></br>
        </Grid>
      </Grid>
    </Box>
  );
}
