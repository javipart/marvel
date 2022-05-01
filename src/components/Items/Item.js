import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Item = ({ id, title, image }) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Item;
