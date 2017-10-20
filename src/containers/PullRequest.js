import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PullRequestActions from '../actions/PullRequest.js';

class PullRequest extends Component {
  componentDidMount() {
    this.props.PullRequestActions.getPullRequests(
      this.props.match.params.username,
      this.props.match.params.repo
    );
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2 align="center"> Pull Request </h2>
        <div className="container ">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Pull Request ID</th>
                <th>Title</th>
                <th>Username</th>
                <th>Created On</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {this.props.PullRequest.map((pullrequest, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {pullrequest.number}
                    </td>
                    <td>
                      {pullrequest.title}
                    </td>
                    <td>
                      {pullrequest.user.login}
                    </td>
                    <td>
                      {pullrequest.created_at}
                    </td>
                    <td>
                      {pullrequest.updated_at}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    PullRequest: state.PullRequest.PullRequest
  };
};

const mapDispatchToProps = dispatch => {
  return {
    PullRequestActions: bindActionCreators(PullRequestActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PullRequest);
