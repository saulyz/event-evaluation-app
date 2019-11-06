import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles( () => ({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  ratingUpActive: {
    color: green[900],
    backgroundColor: green[200]
  },
  ratingDownActive: {
    color: red[900],
    backgroundColor: red[200]
  }
}));

export default function AddFeedback() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickLike = () => {
    setRating('like');
  };

  const handleClickDislike = () => {
    setRating('dislike');
  };

  // todo - add Submit handler

  return (
    <div>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Add Feedback</DialogTitle>
        <DialogContent>
          <div>
            <IconButton className={rating === 'like' ? classes.ratingUpActive : ''} aria-label="Like" onClick={handleClickLike}>
              <ThumbUpIcon />
            </IconButton>
            <IconButton className={rating === 'dislike' ? classes.ratingDownActive : ''} aria-label="Dislike" onClick={handleClickDislike}>
              <ThumbDownIcon />
            </IconButton>
          </div>
          <TextField
            className={classes.textField}
            id="feedback-text"
            label="Your comments"
            placeholder="Can add multiline text here"
            multiline
            fullWidth
            margin="normal"
            helperText="comments are optional"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}