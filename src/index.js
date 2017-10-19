import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import IssuesClass from './containers/IssuesContainer';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const history = createBrowserHistory();

ReactDom.render(
  <Provider store={store}>
    <IssuesClass />
  </Provider>,
  document.getElementById('root')
);
