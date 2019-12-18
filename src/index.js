import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import rootReducer, { rootSaga } from './modules';
import App from './App';
// import { tempSetUser, check } from './modules/user';
// import client from './lib/api/client';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// function loadUser() {
//   console.log('loaduser');
//   try {
//     const user = localStorage.getItem('user');
//     const accessToken = localStorage.getItem('accessToken');

//     if (!user || !accessToken) {
//       console.log('nothing in user or accesstoken');

//       if (window.location.href.includes('/confirm')) {
//         console.log('HELLO');
//         return;
//       }
//       // 2차방지 - 로그인 상태가 아니고 로그인 페이지가 아니라면 로그인 페이지로 이동
//       if (!window.location.href.includes('/login')) {
//         window.location.href = '/login';
//       }
//       return;
//     }
//     client.defaults.headers.common.Authorization = JSON.parse(accessToken);
//     store.dispatch(tempSetUser(user.data));
//     store.dispatch(check());
//   } catch (e) {
//     console.log('LocalStorage IS NOT WORKING', e);
//   }
// }

sagaMiddleware.run(rootSaga);
// loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
