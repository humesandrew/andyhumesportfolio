import * as React from "react";
import ReactDOM from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";

import "./linkslist.css";
import resumeData from "../../resumeData.js";
import EducationModal from "../educationmodal/EducationModal";
import ExtrasModal from "../extrasmodal/ExtrasModal";

const worksCard = function () {
  window.location = "#works";
};

const skillsCard = function () {
  window.location = "#credentials";
};

const resumeCard = function () {
  window.open(resumeData.resume);
};




export default function LinksList() {
  return (
    <Box className="linksListContainer" sx={{ flexGrow: 1 }}>
      <Card
        sx={{ maxWidth: 125, height: 300 }}
        className="worksCard"
        component={Button}
        onClick={worksCard}
      >
        <CardContent>
          <ImageListItemBar
            className="imageTitleText"
            title="Works"
            alt="Works link"
            
          ></ImageListItemBar>
        </CardContent>
      </Card>

      <Card
        sx={{ maxWidth: 125, height: 250 }}
        className="skillsCard"
        component={Button}
        onClick={skillsCard}
      >
        <CardContent>
          <ImageListItemBar
            className="imageTitleText"
            title="Skills"
            alt="Skills link"
          ></ImageListItemBar>
        </CardContent>
      </Card>
      <Card
        sx={{ maxWidth: 125, height: 300 }}
        className="resumeCard"
        component={Button}
        onClick={resumeCard}
      >
        <CardContent 
                       
                         >
          <ImageListItemBar
            className="imageTitleText"
            title="Resume"
            alt="Resume link"
          
   
         
          ></ImageListItemBar>
        </CardContent>
      </Card>
      <Card  sx={{ maxWidth: 125, height: 250 }}>
      <EducationModal
      >
      
          
      
      </EducationModal>
      </Card>
      <Card  sx={{ maxWidth: 125, height: 300 }}>
      <ExtrasModal
      >
      
          
      
      </ExtrasModal>
      </Card>
    </Box>
  );
}
