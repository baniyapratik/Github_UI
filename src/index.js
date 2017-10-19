import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import IssuesClass from './containers/IssuesContainer';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const history = createBrowserHistory();

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/issues/:username/:repo" component={IssuesClass} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
