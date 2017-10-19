import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../actions/issues.js';

class IssuesClass extends Component {
  componentDidMount() {
    this.props.issueActions.getIssues();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.issues.map((issue, i) => {
          return (
            <tr key={i}>
              <td>
                {issue.title}
              </td>
              <td>
                {issue.user.login}
              </td>
            </tr>
          );
        })}
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
