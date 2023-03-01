import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';

function RegistrationButton(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Handle form submission here
    // ...

    // Close the dialog
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        type='submit'
        variant='contained'
        disabled={props.isSubmitting}
        color='secondary'
      >
        {props.isSubmitting ? "Loading" : "Register"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h6" component="div">
            <GppGoodRoundedIcon color="secondary" fontSize="large" />
            Thank you for registering!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            We have received your registration and will be in touch soon.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default RegistrationButton;