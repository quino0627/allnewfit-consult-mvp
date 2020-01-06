import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import question, { questionSaga } from './question';
import progress from './progress';

const rootReducer = combineReducers({
  loading,
  question,
  progress,
});

export function* rootSaga() {
  yield all([
    questionSaga(),
    // curationsSaga(),
    // questionAllSaga(),
  ]);
}

export default rootReducer;
