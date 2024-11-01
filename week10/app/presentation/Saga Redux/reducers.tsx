import { TODOS_FETCH_REQUEST, TODOS_FETCH_SUCCESS, TODOS_FETCH_FAILURE } from './actions';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_FETCH_REQUEST:
      return { ...state, loading: true };
    case TODOS_FETCH_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TODOS_FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
