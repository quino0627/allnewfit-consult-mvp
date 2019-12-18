import client from './client';

export const evaluations = ({ id }) => client.get(`/users/${id}/evaluations`);

export const userInfo = ({ id }) => client.get(`/users/${id}/info`);

export const pointInfo = ({ id }) => client.get(`/users/${id}/points`);

export const churInfo = ({ id }) => client.get(`/users/${id}/chur`);

export const useItem = ({ user_id, inventory_id }) =>
  client.post(`users/${user_id}/inventory/${inventory_id}`);
export const inven = ({ user_id }) => client.get(`users/${user_id}/inventory`);
export const deleteItem = ({ user_id, inventory_id }) =>
  client.delete(`users/${user_id}/inventory/${inventory_id}`);
