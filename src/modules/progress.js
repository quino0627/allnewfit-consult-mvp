/* eslint-disable no-param-reassign */
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { produce } from 'immer';

const INITIALIZE = 'progress/INITIALIZE';
const FAKE_PROGRESS_START = 'progress/FAKE_PROGRESS_START';
const SET_PERCENT = 'progress/SET_PERCENT';

export const initialize = createAction(INITIALIZE);
export const fakeProgressStart = createAction(FAKE_PROGRESS_START);
export const setPercent = createAction(SET_PERCENT, ({ percent }) => ({ percent }));

const initialState = {
  percent: -1,
  autoIncrement: false,
  intervalTime: 200,
};

const progress = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [FAKE_PROGRESS_START]: state =>
      produce(state, draft => {
        draft.percent = 0;
        draft.autoIncrement = true;
        draft.intervalTime = 50;
      }),
    [SET_PERCENT]: (state, { payload: { percent } }) =>
      produce(state, draft => {
        draft.percent = percent;
      }),
  },
  initialState,
);

export default progress;
