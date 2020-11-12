import React, { useState, ChangeEvent } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles/main';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

/**
 * Represents the AddTodo component,
 * contains the logic and the presentational (UI) code for adding a new Todo item.
 */
export default function AddTodo(): JSX.Element {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const addTodoOnClick = () => {
    setOpen(false);
    dispatch(addTodo(nameValue, descriptionValue));
  };

  function enabled() {
    return nameValue.length > 0 && descriptionValue.length > 0;
  }

  const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNameValue(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(event.target.value);
  };

  const handleClickOpen = () => {
    setNameValue('');
    setDescriptionValue('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Add" aria-label="add">
        <Fab
          className={classes.fixed}
          data-testid="fab-testing"
          onClick={handleClickOpen}
          color="secondary"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-basic"
            label="Todo Name"
            fullWidth
            value={nameValue}
            onChange={handleNameChange}
          />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            fullWidth
            value={descriptionValue}
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button data-testid="cancel" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            data-testid="add-Todo"
            onClick={addTodoOnClick}
            color="primary"
            disabled={!enabled()}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
