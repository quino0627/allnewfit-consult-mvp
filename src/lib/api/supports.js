/* eslint-disable camelcase */
import queryString from 'query-string';
import client from './client';

/** 메인페이지의 announce */
export const mainNotice = () => client.get(`/supports/announcements`);

/** 고객센터 글쓰기 */
export const supportWrite = ({ title, content, category }) =>
  client.post(`/supports/questions`, { title, content, category });

/** 문의내역 with pagination */
export const getQuestionList = ({ page, count = 10 }) => {
  const query = queryString.stringify({ page, count });
  return client.get(`/supports/questions?${query}`);
};

/** 특정 문의내역 */
export const getQuestionById = ({ question_id }) =>
  client.get(`/supports/questions/${question_id}`);

/** 신고내역 with pagination */
export const getAccusationList = ({ page, count }) => {
  const query = queryString.stringify({ page, count });
  return client.get(`/supports/accusations?${query}`);
};

/** 개별 신고 내역 */
export const getAccusationById = ({ accusation_id }) =>
  client.get(`/supports/accusations/${accusation_id}`);

/** 고정공지 */
export const getPinnedAnnouncements = () => client.get(`/supports/announcements/pinned`);

export const getAnnouncements = ({ page, count = 10 }) => {
  const query = queryString.stringify({ page, count });
  console.log(query);
  return client.get(`/supports/announcements?${query}`);
};

export const getOneAnnouncement = ({ announcement_id }) => {
  console.log(announcement_id);
  return client.get(`/supports/announcements/${announcement_id}`);
};
