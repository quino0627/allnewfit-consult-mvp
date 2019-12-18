import client from './client';
import qs from 'qs';

export const postReport = ({ target_id, type, category, content }) =>
  client.post(`/supports/accusations`, { category, type, target_id, content });
