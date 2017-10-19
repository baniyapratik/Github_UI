import axios from 'axios';

export const getPullRequests = (username, repo) => {
  return dispatch => {
    axios
      .request({
        method: 'GET',
        url:
          'https://api.github.com/repos/' +
          username +
          '/' +
          repo +
          '/pulls?state=open'
      })
      .then(response => {
        const PullRequests = response.data;

        dispatch({
          type: 'PULL_REQUESTS_FETCH_SUCCESS',
          payload: PullRequests
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
