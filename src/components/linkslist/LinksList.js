import * as React from "react";
import ReactDOM from "react";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import "./linkslist.css";
import resumeData from "../../resumeData.js";
import EducationModal from "../educationmodal/EducationModal";

const worksCard = function() {
  window.location = "#works"
}

export default function LinksList() {
    return (
      <Box className="linksListContainer" sx={{ flexGrow: 1 }}>
       <Card sx={{ maxWidth: 125, height: 300 }} className="worksCard" component={Button} onClick={worksCard}>
     
       
        <CardContent>

        <ImageListItemBar 
            className="imageTitleText"
            title="Works"
            alt="Works link">
            </ImageListItemBar> 
         
       
        </CardContent>
    
    </Card>









    <Card sx={{ maxWidth: 125, height: 300 }}>
      <CardActionArea component='a' href="#skills">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Skills
          </Typography>
          <Typography variant="body2" color="text.secondary">
           This is the skills link
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 125, height: 300 }}>
      <CardActionArea  component='a' href={resumeData.resume}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Resume
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is my resume
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 125, height: 300 }}>
      <CardActionArea button onClick={EducationModal} id="educationmodal">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This will be the education modal
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 125, height: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Box>
      )
    }