import { Grid } from '@mui/material';
import React from 'react';
import Item from './Item';

const GridItems = ({ data }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' alignItems='center'>
      {data.map(item => (
        <Item
          key={item.id}
          id={item.id}
          title={item.name || item.title}
          image={item.thumbnail ? `${item.thumbnail.path}.${item.thumbnail.extension}` : null}
        />
      ))}
    </Grid>
  );
};

export default GridItems;
