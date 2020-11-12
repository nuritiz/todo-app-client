import {
  ADD_TODO_FULFILLED,
  SET_TODOS,
  DELETE_TODO_FULFILLED,
  TodosState,
  TodosActionTypes,
} from './types';

const initialState: TodosState = {
  todosByIds: {},
};

/**
 * The reducer is a function that can access the store to do changes.
 */
export function todosReducer(
  state = initialState,
  action: TodosActionTypes,
): TodosState {
  switch (action.type) {
    case ADD_TODO_FULFILLED: {
      const { addTodoAction, response } = action.payload;
      const { name, description } = addTodoAction.payload;
      const { id, link } = response;

      const todoContent = {
        id,
        link,
        name,
        description,
      };

      state = {
        todosByIds: {
          ...state.todosByIds,
          [id]: todoContent,
        },
      };

      return state;
    }
    case SET_TODOS: {
      const { response } = action.payload;

      for (const todoDict of response) {
        const todoId = todoDict['id'];
        if (!(todoId in state.todosByIds)) {
          state.todosByIds = {
            ...state.todosByIds,
            [todoId]: todoDict,
          };
        }
      }

      return state;
    }
    case DELETE_TODO_FULFILLED: {
      const { deleteTodoAction } = action.payload;
      const id = deleteTodoAction.payload.id;

      delete state.todosByIds[id];
      state.todosByIds = {
        ...state.todosByIds,
      };

      return state;
    }
    default:
      return state;
  }
}
