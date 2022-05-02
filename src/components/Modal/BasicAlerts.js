import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BasicAlerts = ({ type, message, showAlert }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2} >
      <Alert severity={type}>{message}</Alert>
    </Stack>
  );
}

export default BasicAlerts;
// error
// warning
// info
// success