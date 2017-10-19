import axios from 'axios';

export const getIssues = () => {
  return dispatch => {
    axios
      .request({
        method: 'GET',
        url:
          'https://api.github.com/repos/baniyapratik/Github_UI/issues?state=open'
      })
      .then(response => {
        const gitIssues = response.data;

        dispatch({
          type: 'ISSUES_FETCH_SUCCESS',
          payload: gitIssues
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
