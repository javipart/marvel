import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const BasicAlerts = ({ type, message }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2} >
      <Alert severity={type}>{message}</Alert>
    </Stack>
  );
}

BasicAlerts.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default BasicAlerts;
