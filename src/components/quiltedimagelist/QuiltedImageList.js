import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link';


import "./quiltedimagelist.css";
import resumeData from "../../resumeData.js";

export default function Junk() {
  return (
    <ImageList sx={{ width: "100%", height: 266 }} variant="woven" cols={5} gap={5}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className="listItem" button component={Link} href={item.href}
        >
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
            <ImageListItemBar 
            className="imageTitleText"
            title={item.title}
            subtitle={item.author}>
            </ImageListItemBar> 
           
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gettyimages.com.au%2Fgi-resources%2Fimages%2Ffrontdoor%2Fcreative%2FPanoramicImagesRM%2FFD_image.jpg&f=1',
    title: 'Works',
    href: `${resumeData.resume}`
  },
  {
    img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimagejournal.org%2Fwp-content%2Fuploads%2Fbb-plugin%2Fcache%2F23466317216_b99485ba14_o-panorama.jpg&f=1',
    title: 'Technologies',
    href: "https://www.espn.com"
    
  },
  {
    img: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lokeshdhakar.com%2Fprojects%2Flightbox2%2Fimages%2Fimage-4.jpg&f=1',
    title: 'Education',
  },
  {
    img: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fbpucette.b.p.pic.centerblog.net%2Ffv86ll9r.jpg&f=1',
    title: 'Publications',
  },
  {
    img: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Volunteer',
  },

  
];
