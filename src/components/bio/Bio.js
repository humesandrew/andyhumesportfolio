import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import "./bio.scss";
import resumeData from "../../resumeData.js";
import LinksList from "../linkslist/LinksList";



export default function Bio() {
  return (
    <Box className="bioContainer" sx={{ flexGrow: 1 }} id="Bio">
      <Grid container spacing={2} className="leftBioGrid">
        <Grid item md={5} sm={12} xs={12} className='pictureGrid' sx={{ display: { xs: "flex", md: "flex" }, flexDirection: "column", alignItems: "center" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src={resumeData.image}
            className="andyPic"
          ></img>

          <h1>Thanks for visiting.</h1>
          <h3>
            <a href="mailto:humes.andrew@gmail.com" className="mailLink">
              humes.andrew@gmail.com
            </a>
          </h3>
        </Grid>
        <Grid item md={7} sm={12} xs={12} className="rightBioGrid">
          <p>
          Hello, I'm Andy, a determined and versatile junior-level coder proficient in various coding languages and front-end frameworks. With a strong technical background in complex systems and analysis, I have developed a unique adaptability towards learning new skills. My commitment to exceptional customer service and professionalism stems from my extensive experience in the healthcare field.
          </p>

          <p>
          From RNA to React.js, I excel at working within complex systems. Transitioning to coding has allowed me to leverage my technical abilities to produce tangible outcomes. As someone who thrives on analyzing vast amounts of data, I find satisfaction in using my analytical skills honed in the scientific field to achieve practical, polished endpoints through coding.
          </p>
          <br></br>

          <LinksList />

          <br></br>
        </Grid>
      </Grid>
    </Box>
  );
}
