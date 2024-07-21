import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Skeleton } from '@mui/material';

const Content = () => {
  return (
           
          <Box
            component="img"
            src={require('../assets/2.jpg')}
            alt="Full Size"
            sx={{
              width: '100%',
              height: '60%',
              objectFit: 'cover', // Ensure the image covers the container
              borderRadius: 1,   // Optional: Add border-radius if needed
            }}
          />
       
    
  )
}

export default Content
