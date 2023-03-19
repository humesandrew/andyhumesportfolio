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

          <h1>Welcome to my portfolio.</h1>
          <h3>
            <a href="mailto:humes.andrew@gmail.com" className="mailLink">
              humes.andrew@gmail.com
            </a>
          </h3>
        </Grid>
        <Grid item md={7} sm={12} xs={12} className="rightBioGrid">
          <p>
            Hello, I'm Andy. I'm a determined, junior level coder versed in many
            coding languages with proficiency in the front end frameworks. My
            heavy background in technical skills, complex systems, and analysis
            offers a unique adaptability towards learning new skills. I take
            pride in my customer service and professionalism, developed over
            many years in the health care field.
          </p>

          <p>
            From RNA to React.js, I do well within systems. I transitioned to
            coding because it is a way to use my technical abilities to produce
            something tangible (albeit technically intangible). I succeed in
            analyzing profound amounts of data, and with coding, I get to use
            the analytical skills I've been practicing in the scientific field
            towards a practical, polished endpoint.
          </p>
          <br></br>

          <LinksList />

          <br></br>
        </Grid>
      </Grid>
    </Box>
  );
}
