import client from './client';

export const questionsAll = () => client.get(`/supports/questions`);

export const questionsOne = ({ id }) => client.get(`/supports/questions/${id}`);
