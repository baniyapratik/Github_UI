import axios from 'axios';

export const getIssues = (username, repo) => {
  return dispatch => {
    axios
      .request({
        method: 'GET',
        url:
          'https://api.github.com/repos/' +
          username +
          '/' +
          repo +
          '/issues?state=open'
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
