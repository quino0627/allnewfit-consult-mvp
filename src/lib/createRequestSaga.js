import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  // eslint-disable-next-line func-names
  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      // if (response.status === 500 || response.status === 413) {
      //   yield put({
      //     type: FAILURE,
      //     payload: response.data,
      //     meta: response,
      //   });
      //   yield put(finishLoading(type)); // 로딩 끝
      //   return;
      // }
      // console.log(response.data.errorCode);
      if (response.data.errorCode !== undefined) {
        yield put({
          type: FAILURE,
          payload: response.data,
          meta: response,
        });
        yield put(finishLoading(type)); // 로딩 끝
        return;
      }
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
