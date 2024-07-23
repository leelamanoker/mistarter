import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { Favorite, MoreVert} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
const Tucard = () => {
  const [value, setValue] = React.useState(2);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(2);
  return (
   
    <Box flex={1} id='Product'>
         <Grid container spacing={1}>
         <Grid item xs={3}>

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
        it is made by mixing rose syrup, vermicelli, and sweet basil seeds with milk.
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
         <Grid item xs={3}>

         <Card sx={{ maxWidth: 300 }}>
      <CardHeader
            action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
       title="Mojito"
      />
      <CardMedia
        component="img"
        height="250"
        image={require('../assets/mojito.jpg')}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        This Blue Virgin Mojito is made with only four ingredients.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite/>

        </IconButton>
        <Rating
  name="simple-controlled"
  value={value2}
  onChange={(event, newValue) => {
    setValue2(newValue);
  }}
/>
               
      </CardActions>
   
    </Card>
         </Grid>
         <Grid item xs={3}>

<Card sx={{ maxWidth: 300 }}>
<CardHeader
   action={
 <IconButton aria-label="settings">
   <MoreVert/>
 </IconButton>
}
title="Milkshake"
/>
<CardMedia
component="img"
height="250"
image={require('../assets/choco2.jpg')}
alt=""
/>
<CardContent>
<Typography variant="body2" color="text.secondary">
it is made by mixing choclate syrup, vermicelli, and sweet basil seeds with milk.
</Typography>
</CardContent>
<CardActions disableSpacing>
<IconButton aria-label="add to favorites">
 <Favorite/>

</IconButton>
<Rating
name="simple-controlled"
value={value3}
onChange={(event, newValue) => {
setValue3(newValue);
}}
/>
      
</CardActions>

</Card>
</Grid>

         <Grid item xs={3}>

<Card sx={{ maxWidth: 300 }}>
<CardHeader
   action={
 <IconButton aria-label="settings">
   <MoreVert/>
 </IconButton>
}
title="chocolate coffee"
/>
<CardMedia
component="img"
height="250"
image={require('../assets/7.jfif')}
alt=""
/>
<CardContent>
<Typography variant="body2" color="text.secondary">
it is made by mixing choclate syrup, vermicelli, and sweet basil seeds with milk.
</Typography>
</CardContent>
<CardActions disableSpacing>
<IconButton aria-label="add to favorites">
 <Favorite/>

</IconButton>
<Rating
name="simple-controlled"
value={value3}
onChange={(event, newValue) => {
setValue3(newValue);
}}
/>
      
</CardActions>

</Card>
</Grid>
         </Grid>

        

    </Box>
  )
}

export default Tucard
