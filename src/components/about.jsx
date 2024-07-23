import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


 function About() {
  return (
    <Box sx={{ width: '100%' }} id="About" >
      <Grid container rowSpacing={1} >
        <Grid xs={6}>
          <Box>
            
          <Typography variant="h3" align='center' sx={{ fontFamily: 'Raleway, Arial',fontSize: '12',color: 'black' }}>
            About Our Shop
        </Typography>   
            <p>They are amazing spots to work and try new fall items. They are lively, fun, and an enjoyable environment.   </p>

            <p>The life in coffee shops such as Starbucks is not the same as restaurants or other locations. Ordering lattes in the fall, having discussions in a calm place such as it, creates a feeling like no other.</p>

            <p>It is important for kids that coffee shops are open after school so if they need it, they can have an easy place to work and get things done. </p>
</Box>
        </Grid>
        <Grid xs={6}>
        <Box
    component="img"
    src={require('../assets/4.jpg')}
    alt="Full Size"
    sx={{
      width: '100%',
      height: '100%', // Fixed height in pixels
      objectFit: 'cover', // Ensure the image covers the container
      borderRadius: 1,   // Optional: Add border-radius if needed
    }}
  />
  
        </Grid>
        
      </Grid>
    </Box>
  );
}
export default About