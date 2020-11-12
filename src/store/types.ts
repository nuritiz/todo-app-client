export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_FULFILLED = 'ADD_TODO_FULFILLED';
export const API_CALL_FAILED = 'API_CALL_FAILED';

export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_TODOS = 'SET_TODOS';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_FULFILLED = 'DELETE_TODO_FULFILLED';

export interface TodoNameAndDescription {
  name: string;
  description: string;
}

export interface TodoIdAndLink {
  id: string;
  link: string;
}

export interface Todo extends TodoNameAndDescription, TodoIdAndLink {}

export interface TodosDict {
  [key: string]: Todo;
}

export interface TodosState {
  todosByIds: TodosDict;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    name: string;
    description: string;
  };
}

export interface AddTodoFulfilledAction {
  type: typeof ADD_TODO_FULFILLED;
  payload: {
    addTodoAction: AddTodoAction;
    response: TodoIdAndLink;
  };
}

interface FetchTodosAction {
  type: typeof FETCH_TODOS;
}

interface SetTodosAction {
  type: typeof SET_TODOS;
  payload: {
    response: Array<Todo>;
  };
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: string;
  };
}

interface DeleteTodoFulfilledAction {
  type: typeof DELETE_TODO_FULFILLED;
  payload: {
    deleteTodoAction: DeleteTodoAction;
  };
}

export type TodosActionTypes =
  | AddTodoAction
  | AddTodoFulfilledAction
  | FetchTodosAction
  | SetTodosAction
  | DeleteTodoAction
  | DeleteTodoFulfilledAction;
