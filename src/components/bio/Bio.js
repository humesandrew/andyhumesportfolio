import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

import './bio.css';

export default function Bio() {
  return (
    <React.Fragment>
      <Container className="bioContainer" maxWidth="100%">
        <Box className="bioCardBox" sx={{ bgcolor: '#cfe8fc', height: '86vh' }}>
            <Card className='leftCard'>
       <h1> This is text in a box</h1>
       </Card>
       <Card className='rightCard'>
        <h1>this is card 2</h1>
        </Card>
       </Box>
       
      </Container>
    </React.Fragment>
  );
}

