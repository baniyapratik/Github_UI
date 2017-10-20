import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IssuesChart from './IssuesChart';
import * as issueActions from '../actions/issues.js';

class IssuesClass extends Component {
  componentDidMount() {
    this.props.issueActions.getIssues(
      this.props.match.params.username,
      this.props.match.params.repo
    );
  }
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }
  getChartData() {
    //call here
    this.setState({
      chartData: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [
          {
            label: 'Population',
            data: [10, 3, 4, 5, 6, 7, 8],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 99, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(123, 55, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  componentWillMount() {
    this.getChartData();
  }
  render() {
    let value = this.props;
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
          <IssuesChart chartData={this.state.chartData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issues: state.issues.issues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    issueActions: bindActionCreators(issueActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IssuesClass);
