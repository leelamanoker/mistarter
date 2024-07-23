import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import React from 'react';
import Menu from './components/menu';
import Nav from './components/nav';
import Content from './components/content';
import Slide from './components/slidder'
import About from './components/about'
import Contact from './components/contact';
import { Container } from '@mui/material';
function App() {
  return (
    
    <Container>
      <Nav/>
      <Slide/>
      <About/>
     
    <Stack direction="row" spacing={2} justifyContent='space-between'>
      <Content/>
  
  </Stack>
  <Contact/>
  </Container>
  );
}

export default App;
