import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodos } from './api';
import { TODOS_FETCH_REQUEST, fetchTodosSuccess, fetchTodosFailure } from './actions';

function* fetchTodoList() {
  try {
    const todos = yield call(fetchTodos);
    yield put(fetchTodosSuccess(todos));
  } catch (e) {
    yield put(fetchTodosFailure(e.message));
  }
}

export function* watchFetchTodos() {
  yield takeEvery(TODOS_FETCH_REQUEST, fetchTodoList);
}
