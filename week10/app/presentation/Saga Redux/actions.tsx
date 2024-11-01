export const TODOS_FETCH_REQUEST = 'TODOS_FETCH_REQUEST';
export const TODOS_FETCH_SUCCESS = 'TODOS_FETCH_SUCCESS';
export const TODOS_FETCH_FAILURE = 'TODOS_FETCH_FAILURE';
export const TODOS_DELETE_REQUEST = 'TODOS_DELETE_REQUEST';



export const fetchTodosRequest = () => ({ type: TODOS_FETCH_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: TODOS_FETCH_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: TODOS_FETCH_FAILURE, payload: error });

export const deleteTodosRequest = (id) => ({ type: TODOS_DELETE_REQUEST, payload: id });

