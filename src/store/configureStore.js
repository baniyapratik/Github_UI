import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
//import rootReducer from '../reducers/index';
import issuesReducer from '../reducers/issues';

const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);

export default createStore(
  issuesReducer,
  compose(applyMiddleware(thunk, reactRouterMiddleware))
);
