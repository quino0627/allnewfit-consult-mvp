import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import question from './question';
const rootReducer = combineReducers({
  loading,
  question,
});

export function* rootSaga() {
  yield all([
    // curationsSaga(),
    // questionAllSaga(),
  ]);
}

export default rootReducer;
