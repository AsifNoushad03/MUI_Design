import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder, Label } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';



import React from 'react'



function Post() {
  return (
  
    <Card  sx={{margin:5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="john Doe"
        subheader="Augus 22, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://media.istockphoto.com/photos/aerial-view-on-the-skogafoss-waterfall-in-iceland-landscape-from-air-picture-id1178036168?k=20&m=1178036168&s=612x612&w=0&h=scg0B51YG_Ib0T8RCP3IEX9vBgAESIhbHgKeYtB1EGo="
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
        <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>

  )
}

export default Post
