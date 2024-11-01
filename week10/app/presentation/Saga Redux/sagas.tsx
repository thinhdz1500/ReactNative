import { call, put, takeEvery } from 'redux-saga/effects';
import { deleteTodoApi, fetchTodos } from './api';
import { TODOS_FETCH_REQUEST, fetchTodosSuccess, fetchTodosFailure, deleteTodosRequest, TODOS_DELETE_REQUEST } from './actions';

function* fetchTodoList() {
    try {
        const todos = yield call(fetchTodos);
        yield put(fetchTodosSuccess(todos));
    } catch (e) {
        yield put(fetchTodosFailure(e.message));
    }
}
function* deleteTodoSaga(action) {
    try {
        yield call(deleteTodoApi, action.payload)
        yield put(deleteTodosRequest(action.payload))
    }catch (e) {
        yield put(fetchTodosFailure(e.message));
    }
}
export function* watchFetchTodos() {
    yield takeEvery(TODOS_FETCH_REQUEST, fetchTodoList);
}
export function* watchDeleteTodo() {
     yield takeEvery(TODOS_DELETE_REQUEST, deleteTodoSaga); 
    }