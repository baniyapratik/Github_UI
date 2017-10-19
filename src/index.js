import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import IssuesClass from './containers/IssuesContainer';
import PullRequest from './containers/PullRequest';
import Users from './containers/users';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const history = createBrowserHistory();

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/issues/:username/:repo" component={IssuesClass} />
        <Route
          exact
          path="/pullrequest/:username/:repo"
          component={PullRequest}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
