import Stack from '@mui/material/Stack';
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
   {/* <Menu/> */}
   <Content/>
  
  </Stack>
  <Contact/>
  </Container>
  );
}

export default App;
