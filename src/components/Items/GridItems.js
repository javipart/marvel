import { Grid } from '@mui/material';
import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const GridItems = ({ data, handleDetails }) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center' alignItems='center'>
      {data.map(item => (
        <Item
          key={item.id}
          data={item}
          handleDetails={handleDetails}
        />
      ))}
    </Grid>
  );
};

GridItems.propTypes = {
  data: PropTypes.array,
  handleDetails: PropTypes.func,
};

export default GridItems;
