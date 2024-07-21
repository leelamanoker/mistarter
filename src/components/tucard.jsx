import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { Favorite, MoreVert, Share } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
const Tucard = () => {
  const [value, setValue] = React.useState(2);
  return (
   
    <Box flex={1}>
         <Grid container spacing={1}>
         <Grid item xs={4}>

         <Card sx={{ maxWidth: 300 }}>
      <CardHeader
            action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
       title="Faloda"
      />
      <CardMedia
        component="img"
        height="250"
        image={require('../assets/faloda.jpg')}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        it is made by mixing rose syrup, vermicelli, and sweet basil seeds with milk, often served with ice cream.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite/>

        </IconButton>
        <Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
               
      </CardActions>
   
    </Card>
         </Grid>
         <Grid item xs={4}>

         <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
       
      />
      <CardMedia
        component="img"
        height="194"
        image={require('../assets/faloda.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
       
      </CardActions>
   
    </Card>
         </Grid>
         <Grid item xs={4}>

<Card sx={{ maxWidth: 300 }}>
<CardHeader

action={
 <IconButton aria-label="settings">
   <MoreVert/>
 </IconButton>
}
title="Shrimp and Chorizo Paella"
/>
<CardMedia
component="img"
height="194"
image="/assets/faloda.jpg"
alt="Paella dish"
/>
<CardContent>
<Typography variant="body2" color="text.secondary">
 This impressive paella is a perfect party dish and a fun meal to cook
 together with your guests. Add 1 cup of frozen peas along with the mussels,
 if you like.
</Typography>
</CardContent>
<CardActions disableSpacing>
<IconButton aria-label="add to favorites">
 <Favorite/>
</IconButton>
<IconButton aria-label="share">
 <Share />
</IconButton>

</CardActions>

</Card>
</Grid>
         </Grid>

    </Box>
  )
}

export default Tucard
