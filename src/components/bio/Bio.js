import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

import './bio.css';



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
        <Grid item md={6} xs={12}>
          <Item >Left item</Item>
        </Grid>
        <Grid item md={6} xs={12}>
          <Item >Right item</Item>
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

