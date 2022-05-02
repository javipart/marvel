import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { AppBar, Dialog, DialogContent, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { hideModal } from '../actions/modalsActions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modals = ({
  show, title, Component, data,
}) => {
  const dispatch = useDispatch();
  const handleDetailsClose = () => {
    dispatch(hideModal());
  };
  return (
    <Dialog
      fullScreen
      open={show}
      onClose={handleDetailsClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleDetailsClose}
            aria-label='close'
          >
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <Component {...data} dataModal={data} />
      </DialogContent>
    </Dialog>
  );
}

function mapStateToProps(state) {
  return state.modals;
}

const mapDispatchToProps = {
  hide: hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals);