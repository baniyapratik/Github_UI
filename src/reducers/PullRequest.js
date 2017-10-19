const initialState = {
  PullRequest: [],
  OneIssue: {
    issue_number: '',
    title: '',
    labels: '',
    state: '',
    body: ''
  }
};
function PullRequestReducer(state = initialState, action) {
  let PullRequest;
  switch (action.type) {
    case 'PULL_REQUESTS_FETCH_SUCCESS': {
      PullRequest = action.payload;
      return { ...state, PullRequest };
      // return Object.assign({}, state, {
      //   issues: action.payload
      // });
    } //case
    default:
      return state;
  } //switch
} //export
export default PullRequestReducer;
