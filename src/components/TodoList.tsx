import React, { useEffect } from 'react';
import { Typography, Card, CardContent, Box } from '@material-ui/core';
import useStyles from '../styles/main';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos } from '../store/actions';
import { RootState } from '../store/root';
import { Todo } from '../store/types';

/**
 * Represents the TodoList component,
 * contains the presentational (UI) code for presenting todo list to the user.
 */
function TodoList(): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todosList = useSelector((state: RootState) => state.todos.todosByIds);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [todosList]);

  let todos: Todo[] = [];
  if (todosList) {
    todos = Object.values(todosList);
  }

  const listTodos = todos.map((todoDict) => (
    <TodoItem
      id={todoDict.id}
      name={todoDict.name}
      description={todoDict.description}
      link={todoDict.link}
      key={todoDict.id}
    />
  ));

  return (
    <div>
      <Box position="absolute" left="42%" top={40}>
        <Typography variant="h3" color="textPrimary">
          Your Todos
        </Typography>
        <Card className={classes.card}>
          <CardContent>{listTodos}</CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default TodoList;
c