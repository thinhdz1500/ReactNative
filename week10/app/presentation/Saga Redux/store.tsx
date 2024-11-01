import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers';
import { watchFetchTodos } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchTodos);

export default store;
