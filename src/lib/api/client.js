import axios from 'axios';

const client = axios.create();

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};

const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    return error.response;
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ ...error });
};

const successHandler = response => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response;
};

client.defaults.baseURL = 'http://ec2-13-209-192-105.ap-northeast-2.compute.amazonaws.com/api';
// const AUTHENTICATION = localStorage.getItem('authorization');
client.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);
//not here, after login
// const AUTHENTICATION = 'test authentication';

// client.defaults.headers.common['Authorization'] = `Bearer ${AUTHENTICATION}`;
// client.defaults.baseURL = "http://54.180.124.200";

/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 
  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/

export default client;