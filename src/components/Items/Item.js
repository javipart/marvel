import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Item = ({ data, handleDetails }) => {
  const title = data.name || data.title;
  const image = data.thumbnail ? `${data.thumbnail.path}.${data.thumbnail.extension}` : null;

  return (
    <Grid item>
      <Card
        sx={{ backgroundColor: '#e5e7ef', width: 200, height: 400 }}
        onClick={() => handleDetails(data)}
      >
        <CardActionArea>
          <CardMedia
            component='img'
            image={image}
            alt={title}
            height={300}

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
