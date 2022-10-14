import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import "./jsportfolioitem.css";
import resumeData from "../../resumeData.js";


export default function JsPortfolioItem() {
  return (
    <Card className="worksItemCard" sx={{ maxWidth: 800 }}>
      <CardMedia
        component="img"
        height="140"
        image={resumeData.project[0].image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {resumeData.project[0].name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {resumeData.project[0].description}
          <p>Technologies used: {resumeData.project[0].technologies}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={resumeData.project[0].url} target="_blank" rel="noreferrer">Deployed</a></Button>
        <Button size="small"><a href={resumeData.project[0].url2} target="_blank" rel="noreferrer">Code</a></Button>
      </CardActions>
    </Card>
  );
}
