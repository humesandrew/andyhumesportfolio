import * as React from "react";
import resumeData from "../../resumeData.js";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./footer.css";

const emailBtn = function () {
  window.open("mailto:humes.andrew@gmail.com");
};
const linkedInBtn = function () {
  window.open("https://www.linkedin.com/in/andy-humes-72075559/");
};
const gitHubBtn = function () {
  window.open("https://github.com/humesandrew/");
};
const resumeBtn = function () {
  window.open(resumeData.resume);
};


export default function Footer() {
  return (
    <Box className="footerBox" sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "black",
          textDecoration: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Portfolio developed by Andy Humes, 2022.
      </Typography>
      <div className='iconDiv'>
      <EmailIcon className="email"
        sx={{margin: "7px"}} onClick={emailBtn}></EmailIcon>
      <LinkedInIcon className="linkedIn"
      sx={{margin: "7px"}} onClick={linkedInBtn}></LinkedInIcon>
      <GitHubIcon className="gitHub"
      sx={{margin: "7px"}} onClick={gitHubBtn}></GitHubIcon>
      </div>
    </Box>
  );
}
