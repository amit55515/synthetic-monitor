import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Form from '../Form/Form';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';

function NewApiForm(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const [checked, setChecked] = useState(false);
  const [swagger, setSwagger] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    setSwagger(!swagger);
  }
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      {/* <Switch
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /> */}
      <DialogTitle id="simple-dialog-title">{swagger ? 'Add Swagger URl' : 'Add new end Point' }</DialogTitle>
        <Form swagger={swagger} setList={props.setList} renderList={props.renderList} handleClose={handleClose} parentCallback={props.parentCallback} />
    </Dialog>
  );
}

NewApiForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddForm(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div>
      <Button style={{color: 'white'}} onClick={handleClickOpen}>
        Add new
      </Button>
      <NewApiForm open={open} onClose={handleClose} renderList={props.renderList} setList={props.setList} parentCallback={props.parentCallback} handleClose={handleClose} />
    </div>
  );
}
