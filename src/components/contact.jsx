import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

 function Contact() {
  return (
    <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} >
        <Grid xs={6}>
          <Box>
            
          <Typography variant="iframe" component="iframe" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125585.01575949558!2d78.73204000094267!3d10.379274899176496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b00784afaaaaab5%3A0xb18f55f3bff42daf!2sSecond%20Floor%2C%207th%20Street%2C%20next%20to%20SRM%20electronics%2C%20Santhanathapuram%2C%20Pudukkottai%2C%20Tamil%20Nadu%20622001!3m2!1d10.379285399999999!2d78.81444189999999!5e0!3m2!1sen!2sin!4v1721643280889!5m2!1sen!2sin" sx={{  border: 'none', width: '100%',
                height: '500px'}}>
            About Our Shop
        </Typography>   
           
</Box>
        </Grid> 
        
            <Grid item xs={6} md={6}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '80%' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h1>Contact Us</h1>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        defaultValue=""
                    />
                    <TextField
                        required
                        id="mobile"
                        label="Mobile"
                        defaultValue=""
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        defaultValue=""
                    />
                    <TextField
                        required
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        color="success"
                        sx={{ mt: 2 }}
                    >
                        Send
                    </Button>
                </Box>
            </Grid>
        </Grid>
        
     
    </Box>
  );
}
export default Contact