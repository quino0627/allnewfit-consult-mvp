import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
// import { device } from 'styles/device';

// pages
import { MainPage, NotFoundPage } from './pages';

const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5,h6,section,p,ul,ol,li,dl,dt,dd,body,html {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }


  body {
    margin: 0;
    min-width: 320px;
    /* overflow: hidden; */
    height: 100%;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }

  ul {
    list-style: none;
  }
`;

// const store = configure();

const App = ({ match }) => {
  // const user = localStorage.getItem('user');
  // const accessToken = localStorage.getItem('accessToken');

  const { userAgent } = navigator;
  const isMobile = !!(
    userAgent.match(/Android/i) ||
    userAgent.match(/webOS/i) ||
    userAgent.match(/iPhone/i) ||
    userAgent.match(/iPad/i) ||
    userAgent.match(/iPod/i) ||
    userAgent.match(/BlackBerry/i) ||
    userAgent.match(/Windows Phone/i)
  );

  global.isMobile = isMobile;
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={MainPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
