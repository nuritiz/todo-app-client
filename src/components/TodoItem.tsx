import React from 'react';
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/actions';
import { Todo } from '../store/types';
import useStyles from '../styles/main';

/**
 * Represent the TodoItem component.
 * @param props the todo item properties
 */
function TodoItem(props: Todo): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  function deleteTask() {
    dispatch(deleteTodo(props.id));
  }

  return (
    <div className={classes.root} key={props.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={deleteTask}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label={props.name}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default TodoItem;
