import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const Item = ({ data, handleDetails }) => {
  const title = data.name || data.title;
  const image = data.thumbnail ? `${data.thumbnail.path}.${data.thumbnail.extension}` : null;

  return (
    <Grid item>
      <Card
        sx={{ backgroundColor: '#e5e7ef', width: 200, height: image ? 400 : 130 }}
        onClick={() => handleDetails(data)}
      >
        <CardActionArea>
          {image ?
            (<CardMedia
              component='img'
              image={image}
              alt={title}
              height={300}

            />
            )
            : null}
          <CardContent>
            <Typography gutterBottom variant='h7' component='div'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

Item.propTypes = {
  data: PropTypes.object,
  handleDetails: PropTypes.func,
};

export default Item;
