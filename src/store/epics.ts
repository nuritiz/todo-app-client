import { ajax, AjaxError } from 'rxjs/ajax';
import { ofType, Epic } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { addTodoFulfilled, setTodos, deleteTodoFulfilled } from './actions';
import {
  ADD_TODO,
  FETCH_TODOS,
  DELETE_TODO,
  API_CALL_FAILED,
  AddTodoAction,
  DeleteTodoAction,
  Todo,
} from './types';

/**
 * Epic is a function which takes a stream of actions and returns a stream of actions.
 */

// epic
export const addTodoEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ADD_TODO),
    mergeMap((action: AddTodoAction) =>
      addTodoApiCall(action).pipe(
        map((result) => addTodoFulfilled(action, result.response)),
        catchError((error) => apiCallFailed(error)),
      ),
    ),
  );

function apiCallFailed(error: AjaxError) {
  return of({
    payload: error,
    type: API_CALL_FAILED,
  });
}

function addTodoApiCall(action: AddTodoAction) {
  return ajax({
    url: process.env.REACT_APP_URL + '/task',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: action.payload,
  });
}

// epic
export const fetchTodosEpic: Epic = (action$) =>
  action$.pipe(
    ofType(FETCH_TODOS),
    mergeMap(() =>
      ajax
        .getJSON(process.env.REACT_APP_URL + '/tasks')
        .pipe(map((response) => setTodos(response as Array<Todo>))),
    ),
    catchError((error) => apiCallFailed(error)),
  );

function deleteTodoApiCall(action: DeleteTodoAction) {
  const id = action.payload.id;
  return ajax({
    url: process.env.REACT_APP_URL + '/task/' + id,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// epic
export const deleteTodoEpic: Epic = (action$) =>
  action$.pipe(
    ofType(DELETE_TODO),
    mergeMap((action: DeleteTodoAction) =>
      deleteTodoApiCall(action).pipe(
        map(() => deleteTodoFulfilled(action)),
        catchError((error) => apiCallFailed(error)),
      ),
    ),
  );
