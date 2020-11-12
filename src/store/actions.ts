// action creators
import {
  ADD_TODO,
  ADD_TODO_FULFILLED,
  FETCH_TODOS,
  SET_TODOS,
  DELETE_TODO,
  DELETE_TODO_FULFILLED,
  TodosActionTypes,
  AddTodoAction,
  DeleteTodoAction,
  TodoIdAndLink,
  Todo,
} from './types';

export const addTodo = (
  name: string,
  description: string,
): TodosActionTypes => ({
  type: ADD_TODO,
  payload: {
    name,
    description,
  },
});

export const addTodoFulfilled = (
  addTodoAction: AddTodoAction,
  response: TodoIdAndLink,
): TodosActionTypes => ({
  type: ADD_TODO_FULFILLED,
  payload: {
    addTodoAction,
    response,
  },
});

export const fetchTodos = (): TodosActionTypes => ({
  type: FETCH_TODOS,
});

export const setTodos = (response: Array<Todo>): TodosActionTypes => ({
  type: SET_TODOS,
  payload: {
    response,
  },
});

export const deleteTodo = (id: string): TodosActionTypes => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const deleteTodoFulfilled = (
  deleteTodoAction: DeleteTodoAction,
): TodosActionTypes => ({
  type: DELETE_TODO_FULFILLED,
  payload: {
    deleteTodoAction,
  },
});
