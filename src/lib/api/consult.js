/* esling-disable camelcase */
import client from './client';

export const sendConsult = ({ personalInfo }) => {
  return client.post('/consult/string', { personal_info: personalInfo });
};
