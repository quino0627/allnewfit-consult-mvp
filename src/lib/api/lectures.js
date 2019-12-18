/* eslint-disable camelcase */
import qs from 'qs';
import client from './client';

/** 강의 정보를 받아오는 api */
export const getLectureInfo = ({ lecture_id }) => client.get(`/lectures/${lecture_id}`);

/** 강의평가를 받아오는 api */
export const getLectureEvals = ({ lecture_id, order, direction, page, count }) =>
  client.get(`/lectures/${lecture_id}/evals`, {
    params: {
      order,
      direction,
      page,
      count,
    },
  });

/** 강의노트를 받아오는 api */
export const getLectureNotes = ({ lecture_id, category, order, page, count }) =>
  client.get(`/lectures/${lecture_id}/notes`, {
    params: {
      order,
      category,
      page,
      count,
    },
  });

/** 아무 것도 없는 상태에서 좋아요 눌렀을 때 */
export const postEvalLike = ({ lecture_id, lecture_eval_id }) =>
  client.post(`/lectures/${lecture_id}/evals/${lecture_eval_id}/like`);

/** 아무 것도 없는 상태에서 싫어요 눌렀을 때 */
export const postEvalDislike = ({ lecture_id, lecture_eval_id }) =>
  client.post(`/lectures/${lecture_id}/evals/${lecture_eval_id}/dislike`);

/** 싫어요 상태에서 좋아요 눌렀을 때 */
export const putEvalLike = ({ lecture_id, lecture_eval_id }) =>
  client.put(`/lectures/${lecture_id}/evals/${lecture_eval_id}/like`);

/** 좋아요 상태에서 싫어요 눌렀을 때 */
export const putEvalDislike = ({ lecture_id, lecture_eval_id }) =>
  client.put(`/lectures/${lecture_id}/evals/${lecture_eval_id}/dislike`);

/** 좋아요 상태에서 좋아요 눌렀을 때 */
export const deleteEvalLike = ({ lecture_id, lecture_eval_id }) =>
  client.delete(`/lectures/${lecture_id}/evals/${lecture_eval_id}/like`);

/** 싫어요 상태에서 싫어요 눌렀을 때 */
export const deleteEvalDislike = ({ lecture_id, lecture_eval_id }) =>
  client.delete(`/lectures/${lecture_id}/evals/${lecture_eval_id}/dislike`);

/** 강의평가 작성하기 */
export const writeEval = ({ lecture_id, lectureData }) =>
  client.post(`/lectures/${lecture_id}/evals`, lectureData);

/** 강의노트 업로드하기 */
export const writeNote = ({ lecture_id, lectureData }) => {
  console.log(lectureData);
  for (const key of lectureData.keys()) {
    console.log(key);
  }

  for (const value of lectureData.values()) {
    console.log(value);
  }
  return client.post(`/lectures/${lecture_id}/notes`, lectureData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

/** 강의평가 수정하기 */
export const updateEval = ({ lecture_id, lecture_eval_id }) =>
  client.put(`/lectures/${lecture_id}/evals/${lecture_eval_id}`);

/** 강의평가 삭제하기 */
export const deleteEval = ({ lecture_id, lecture_eval_id }) =>
  client.delete(`/lectures/${lecture_id}/evals/${lecture_eval_id}`);

// /** 일반 강의 검색 */
export const lectureSearch = ({
  keywords,
  year,
  term,
  category,
  page,
  count,
  order,
  getTotal,
  direction,
}) => {
  year = year || undefined;
  term = term || undefined;
  category = category || undefined;
  console.log(direction);

  const queryString = qs.stringify({
    keywords,
    year,
    term,
    category,
    page,
    count,
    order,
    getTotal,
    direction,
  });

  return client.get(`/search?${queryString}`);
};

/** 고급 검색 */
export const lectureAdsearch = ({ keywords, order, page, count, getTotal, options }) => {
  options.year = options.year ? options.year : undefined;
  options.term = options.term ? options.term : undefined;
  options.category = options.category ? options.category : undefined;

  const queryString = qs.stringify({
    keywords,
    order,
    page,
    count,
    getTotal,
    ...options,
  });

  return client.get(`/search/details?${queryString}`);
};

/** 자동완성 api */
export const autoComplete = ({ keywords, page, options }) => {
  const year = options.year ? options.year : undefined;
  const term = options.term ? options.term : undefined;
  const queryString = qs.stringify({ keywords, page, year, term }, { skipNulls: true });
  return client.get(`/search/keywords?${queryString}`);
};

/** 큐레이션 시작 */

// GET, 인기있는 강의 리스트
export const popularLectureList = () => client.get('/lectures/curations/popular');

// GET, 추천하는 강의 리스트
export const recommendLectureList = () => client.get('/lectures/curations/recommendation');

// GET, 명강리스트
export const goodLectureList = () => client.get('/lectures/curations/good');
/** 큐레이션 끝 */
