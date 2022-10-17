import { all, fork } from 'redux-saga/effects';
import MovieSaga from './MovieSaga';


export default function* rootSaga() {
  yield all([
    fork(MovieSaga),
  ]);
}
