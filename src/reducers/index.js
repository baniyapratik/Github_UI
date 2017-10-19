import { combineReducers } from 'redux';
import issuesReducer from './issues';
import PullRequestReducer from './PullRequest';
const rootReducer = combineReducers({
  issues: issuesReducer,
  PullRequest: PullRequestReducer
});
export default rootReducer;
