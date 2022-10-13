import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

import './bio.scss';
import resumeData from "../../resumeData.js";


import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Bio() {
  return (
    <Box className="bioContainer" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={5} xs={12}>
          <Item >
            <img alt='Andy Humes - Junior Developer' src={resumeData.image} className='andyPic'>
        
          </img> 
          
          <h1>Welcome to my portfolio.</h1>
          </Item>
        </Grid>
        <Grid item md={7} xs={12}>
          <Item >
         Determined, junior level coder versed in many coding languages with
proficiency in the front end frameworks. Offers a unique adaptability,
stemming from a heavy background in technical skills, complex systems,
and analysis. Strong customer service background from many years in
health care.
<br></br>
Determined, junior level coder versed in many coding languages with
proficiency in the front end frameworks. Offers a unique adaptability,
stemming from a heavy background in technical skills, complex systems,
and analysis. Strong customer service background from many years in
health care.
<div className="gallery">

<h1>Hello</h1>
<h1>Hello</h1>
<h1>Hello</h1>
<h1>Hello</h1>
</div>

          </Item>
        </Grid>
      
      </Grid>
    </Box>
  );
}










// export default function Bio() {
//   return (
//     <React.Fragment>
//       <Container className="bioContainer" maxWidth="100%">
//         <Box className="bioCardBox" sx={{ bgcolor: '#cfe8fc' }}>
//             <Card sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "flex" },}} className='leftCard'>
//        <h1> This is text in a box</h1>
//        </Card>
//        <Card className='rightCard'>
//         <h1>this is card 2</h1>
//         </Card>
//        </Box>
       
//       </Container>
//     </React.Fragment>
//   );
// }

