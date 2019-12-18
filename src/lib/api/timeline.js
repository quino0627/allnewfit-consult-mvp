import client from './client';
import qs from 'qs';

/** 강의평가를 받아오는 api */
export const getTimeline = ({ page, count, year, term }) =>
  client.get(`/timelines`, {
    params: {
      page: page,
      count: count
    }
  });

export const postTimeline = ({ content }) =>
  client.post(`/timelines`, { content });

export const putTimeline = ({ timeline_id, content }) =>
  client.put(`/timelines/${timeline_id}`, { content });

export const deleteTimeline = ({ timeline_id }) =>
  client.delete(`/timelines/${timeline_id}`);

export const postTimelineComment = ({ timeline_id, content }) =>
  client.post(`/timelines/${timeline_id}/comments`, { content });

export const putTimelineComment = ({ timeline_id, timeline_comments_id, content }) =>
  client.put(`/timelines/${timeline_id}/comments/${timeline_comments_id}`, {
    content
  });

export const deleteTimelineComment = ({ timeline_id, timeline_comments_id }) =>
  client.delete(`/timelines/${timeline_id}/comments/${timeline_comments_id}`);

/** 아무 것도 없는 상태에서 좋아요 눌렀을 때 */
export const postTimelineLike = ({ timeline_id }) =>
  client.post(`/timelines/${timeline_id}/like`);

/** 아무 것도 없는 상태에서 싫어요 눌렀을 때 */
export const postTimelineDislike = ({ timeline_id }) =>
  client.post(`/timelines/${timeline_id}/dislike`);

/** 싫어요 상태에서 좋아요 눌렀을 때 */
export const putTimelineLike = ({ timeline_id }) =>
  client.put(`/timelines/${timeline_id}/like`);

/** 좋아요 상태에서 싫어요 눌렀을 때 */
export const putTimelineDislike = ({ timeline_id }) =>
  client.put(`/timelines/${timeline_id}/dislike`);

/** 좋아요 상태에서 좋아요 눌렀을 때 */
export const deleteTimelineLike = ({ timeline_id }) =>
  client.delete(`/timelines/${timeline_id}/like`);

/** 싫어요 상태에서 싫어요 눌렀을 때 */
export const deleteTimelineDislike = ({ timeline_id }) =>
  client.delete(`/timelines/${timeline_id}/dislike`);
