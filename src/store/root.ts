import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { todosReducer } from './reducers';
import { addTodoEpic, fetchTodosEpic, deleteTodoEpic } from './epics';

export const rootEpic = combineEpics(
  addTodoEpic,
  fetchTodosEpic,
  deleteTodoEpic,
);

export const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
