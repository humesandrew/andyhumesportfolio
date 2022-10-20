import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom='10px'
      >
        <Item sx={{ width: '100%'}}>Item 1</Item>
        <Item sx={{ width: '100%'}}>Item 2</Item>
        <Item sx={{ width: '100%'}}>Item 3</Item>
       
      </Stack>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom='10px'
      >
        <Item sx={{ width: '100%' }}>Item 1</Item>
        <Item sx={{ width: '100%' }}>Item 2</Item>
        <Item sx={{ width: '100%' }}>Item 3</Item>
       
      </Stack>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom='10px'
      >
        <Item sx={{ width: '100%' }}>Item 1</Item>
        <Item sx={{ width: '100%' }}>Item 2</Item>
        <Item sx={{ width: '100%' }}>Item 3</Item>
       
      </Stack>
    </div>
  );
}
