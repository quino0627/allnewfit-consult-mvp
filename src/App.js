import React from 'react';
// import ReactGA from 'react-ga';
// import { createBrowserHistory } from 'history';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
// import { device } from 'styles/device';

// pages
import { MainPage, NotFoundPage, ConsultLoadingPage, CheckoutPage } from './pages';
import ConsultPage from './pages/ConsultPage';
import withTracker from './withTracker';

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

// const trackingId = 'UA-147374950-2'; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// const history = createBrowserHistory();
// // Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

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
        <Route exact path="/" component={withTracker(MainPage)} />
        <Route path="/consult/loading" component={withTracker(ConsultLoadingPage)} />
        <Route path="/consult" component={withTracker(ConsultPage)} />
        <Route path="/checkout" component={withTracker(CheckoutPage)} />
        <Route component={withTracker(NotFoundPage)} />
      </Switch>
    </>
  );
};

export default App;
