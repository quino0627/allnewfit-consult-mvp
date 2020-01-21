/* eslint-disable no-param-reassign */
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as consultAPI from '../lib/api/consult';

const INITIALIZE = 'question/INITIALIZE';
const CHANGE_INPUT_VALUE = 'question/CHANGE_INPUT/VALUE';
const CHANGE_QUESTION_VALUE = 'question/CHANGE_VALUE';
const CHANGE_ARRAY_VALUE = 'question/CHANGE_ARRAY_VALUE';
const [APPLY_CONSULT, APPLY_CONSULT_SUCCESS, APPLY_CONSULT_FAILURE] = createRequestActionTypes(
  'question/APPLY_CONSULT',
);
const [TEMP_CONSULT, TEMP_CONSULT_SUCCESS, TEMP_CONSULT_FAILURE] = createRequestActionTypes(
  'question/TEMP_CONSULT',
);

export const initialize = createAction(INITIALIZE);
export const changeInputValue = createAction(CHANGE_INPUT_VALUE, ({ field, value }) => ({
  field,
  value,
}));
export const changeQuestionValue = createAction(
  CHANGE_QUESTION_VALUE,
  ({ stage, field, value }) => ({
    stage,
    field,
    value,
  }),
);
export const changeArrayValue = createAction(CHANGE_ARRAY_VALUE, ({ stage, field, value }) => ({
  stage,
  field,
  value,
}));
export const applyConsult = createAction(APPLY_CONSULT, personalInfo => personalInfo);
export const tempConsult = createAction(TEMP_CONSULT, personalInfo => personalInfo);

const applyConsultSaga = createRequestSaga(APPLY_CONSULT, consultAPI.sendConsult);
const tempConsultSaga = createRequestSaga(TEMP_CONSULT, consultAPI.sendConsultWOPay);

export function* questionSaga() {
  yield takeLatest(APPLY_CONSULT, applyConsultSaga);
  yield takeLatest(TEMP_CONSULT, tempConsultSaga);
}

const initialState = {
  name: null,
  email: null,
  phone: null,
  consultType: null,
  apply: null,
  applyError: null,
  // StageOne은 Introduce이므로 value가 필요없음
  questions: {
    one: {
      type: 'introduce',
      number: 'one',
      link: 'https://naver.com/images/images/images',
      value: null,
    },
    two: {
      type: 'oneQuestion',
      number: 'two',
      title: '현재 운동 중이신가요?',
      choices: ['예', '아닙니다'],
      value: null,
    },
    three: {
      type: 'oneQuestion',
      number: 'three',
      title: '일주일에 몇 회 정도 하실 수 있나요?(60분 기준)',
      choices: ['1~2회', '3~4회', '5~7회', '운동을 할 시간이 없음.'],
      value: null,
    },
    four: {
      type: 'oneQuestionWithOther',
      number: 'four',
      title: '어디서 운동할 수 있나요?',
      choices: ['피트니스 센터', '집', '공원', '운동장', '기타'],
      value: null,
      description: null,
    },
    five: {
      type: 'oneQuestionWithOther',
      number: 'five',
      title: '현재 어떤 운동을 하고 계신가요?',
      choices: [
        '웨이트 트레이닝',
        '크로스핏',
        '요가',
        '필라테스',
        '생활스포츠(야구,축구,농구 등)',
        '맨몸운동',
        '현재 운동은 안 하고 있음',
        '기타',
      ],
      value: null,
      others: null,
    },
    six: {
      type: 'oneQuestionWithDescription',
      number: 'six',
      title: '운동을 하고자 하는 주된 이유가 무엇인가요?',
      choices: [
        '체지방 감소',
        '근력 / 근육 크기 증가',
        '심폐 체력 증진',
        '뼈 건강 개선',
        '전반적인 건강 개선',
        '부상 회복',
      ],
      value: null,
      description: '',
    },
    seven: {
      type: 'oneQuestionWithDescription',
      number: 'seven',
      title: '운동을 하고자 하는 부수적 이유가 무엇인가요?',
      choices: [
        '체지방 감소',
        '근력 / 근육 크기 증가',
        '심폐 체력 증진',
        '뼈 건강 개선',
        '전반적인 건강 개선',
        '부상 회복',
      ],
      value: null,
      description: '',
    },
    eight: {
      type: 'oneQuestionWithInputBox',
      number: 'eight',
      title: '향후 6개월동안 이루고자 하는 건강/체력상의 목표는 무엇인가요?',
      value: null,
    },
    nine: {
      type: 'oneQuestion',
      number: 'nine',
      title: '성별이 어떻게 되시나요?',
      choices: ['남성', '여성', '해당사항 없음'],
      value: null,
    },
    ten: {
      type: 'oneQuestion',
      number: 'ten',
      title: '연령대가 어떻게 되시나요?',
      choices: ['10대', '20대', '30대', '40대'],
      value: null,
    },
    eleven: {
      type: 'twoQuestionWithBothInputBox',
      number: 'eleven',
      title1: '현재 체중을 적어주세요',
      title2: '현재 키(cm)를 적어주세요',
      value1: null,
      value2: null,
    },
    twelve: {
      type: 'oneQuestionSelectManyWithDescription',
      number: 'twelve',
      title: '현재 자신의 상태에 해당되는 것을 모두 클릭해 주세요.',
      choices: [
        '천식',
        '심장 질환',
        '식단 조절 혹은 단식',
        '뇌졸중 경험이 있음',
        '어지러움을 자주 느낌',
        '1 / 2형 당뇨 진단 경험',
        '관절 / 근육 질환 존재',
        '임신 / 3달 안에 출산',
        '해당사항 없음',
      ],
      value: [],
      description: '',
    },
    thirteen: {
      type: 'oneQuestionSelectManyWithDescription',
      number: 'thirteen',
      title: '의사로부터 수치가 높다는 진단을 받은 적 있는 것을 모두 클릭해 주세요',
      choices: ['콜레스테롤', '혈당', '해당사항 없음'],
      value: [],
      description: '',
    },
    fourteen: {
      type: 'oneQuestionWithDescription',
      number: 'fourteen',
      title: '최근 12개월 동안 부상이나 질병으로 입원했던 적이 있나요?',
      choices: ['예', '아닙니다'],
      value: null,
      description: '',
    },
    fifteen: {
      type: 'oneQuestion',
      number: 'fifteen',
      title: '흡연을 하나요? 하루에 몇 갑 정도 피나요?',
      choices: ['흡연하지 않습니다', '1갑 이하', '1~2갑', '3~4갑', '그 이상'],
      value: null,
    },
    sixteen: {
      type: 'oneQuestionWithDescription',
      number: 'sixteen',
      title: '현재 복용중인 약이 있나요? 먹고 있다면 그 이유를 적어주세요',
      choices: ['약을 먹고 있습니다', '약을 먹고있지 않습니다.'],
      value: null,
    },
  },
};

const question = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_INPUT_VALUE]: (state, { payload: { field, value } }) =>
      produce(state, draft => {
        draft[field] = value;
      }),
    [CHANGE_QUESTION_VALUE]: (state, { payload: { stage, field = 'value', value } }) =>
      produce(state, draft => {
        // key는 기본적으로는 항상 "value"
        draft.questions[stage][field] = value;
      }),
    [CHANGE_ARRAY_VALUE]: (state, { payload: { stage, field = 'value', value } }) =>
      produce(state, draft => {
        const idx = draft.questions[stage][field].findIndex(item => item === value);
        if (idx > -1) {
          draft.questions[stage][field].splice(idx, 1);
        } else {
          draft.questions[stage][field].push(value);
        }
      }),
    [APPLY_CONSULT_SUCCESS]: (state, { payload: response }) =>
      produce(state, draft => {
        draft.apply = response;
      }),
    [APPLY_CONSULT_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.applyError = error;
      }),
    [TEMP_CONSULT_SUCCESS]: (state, { payload: response }) => produce(state, draft => {}),
    [TEMP_CONSULT_FAILURE]: (state, { payload: error }) => produce(state, draft => {}),
  },
  initialState,
);

export default question;
