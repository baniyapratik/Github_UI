import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../actions/issues.js';

class IssuesClass extends Component {
  componentDidMount() {
    this.props.issueActions.getIssues(
      this.props.match.params.username,
      this.props.match.params.repo
    );
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2 align="center"> Issues </h2>
        <div className="container ">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Issue Number</th>
                <th>Title</th>
                <th>Username</th>
                <th>Created On</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {this.props.issues.map((issue, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {issue.number}
                    </td>
                    <td>
                      {issue.title}
                    </td>
                    <td>
                      {issue.user.login}
                    </td>
                    <td>
                      {issue.created_at}
                    </td>
                    <td>
                      {issue.updated_at}
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
    issues: state.issues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    issueActions: bindActionCreators(issueActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IssuesClass);
