/* eslint-disable camelcase */
import client from './client';

// login
export const login = ({ username, password, remember = false }) => {
  return client
    .post('/auth/login', { username, password, remember })
    .then(res => {
      client.defaults.headers.common['Authorization'] = res.headers.authorization;
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

//   register
// TBI
export const register = ({ username, password, school_id, school_email, nickname }) => {
  return client.post('/auth/register', {
    username,
    password,
    school_id,
    school_email,
    nickname,
  });
};

export const usernameValidate = ({ username }) => {
  return client.get(`/auth/validation/username?username=${username}`);
};

export const nicknameValidate = ({ nickname }) => {
  return client.get(`/auth/validation/nickname?nickname=${nickname}`);
};

// 나중에 추가할 것.
export const schoolEmailValidate = ({ school_email }) => {
  return client.get(`/auth/validation/school_email?school_email=${school_email}`);
};

// 이메일을 통해 클루에 접근했을 시 이 api를 사용해서 토큰을 검증
export const schoolEmailConfirm = ({ token }) => {
  return client.get(`/auth/confirm?token=${token}`);
};

export const logout = () => client.post('/auth/logout');

export const check = () => client.get('/auth/info');
