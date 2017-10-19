const initialState = {
  issues: [],
  OneIssue: {
    issue_number: '',
    title: '',
    labels: '',
    state: '',
    body: ''
  }
};
function issuesReducer(state = initialState, action) {
  let issues;
  switch (action.type) {
    case 'ISSUES_FETCH_SUCCESS': {
      issues = action.payload;
      return { ...state, issues };
      // return Object.assign({}, state, {
      //   issues: action.payload
      // });
    } //case
    default:
      return state;
  } //switch
} //export
export default issuesReducer;
