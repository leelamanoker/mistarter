import React from 'react'
import Box from '@mui/material/Box';

const Content = () => {
  return (
           
    <Box
    component="img"
    src={require('../assets/5.jpg')}
    alt="Full Size"
    sx={{
      width: '100%',
      height: '400px', // Fixed height in pixels
      objectFit: 'cover', // Ensure the image covers the container
      borderRadius: 1,   // Optional: Add border-radius if needed
    }}
  />
  
  
       
    
  )
}

export default Content
