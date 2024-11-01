export const TODOS_FETCH_REQUEST = 'TODOS_FETCH_REQUEST';
export const TODOS_FETCH_SUCCESS = 'TODOS_FETCH_SUCCESS';
export const TODOS_FETCH_FAILURE = 'TODOS_FETCH_FAILURE';

export const fetchTodosRequest = () => ({ type: TODOS_FETCH_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: TODOS_FETCH_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: TODOS_FETCH_FAILURE, payload: error });
