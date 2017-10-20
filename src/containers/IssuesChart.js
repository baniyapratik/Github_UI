import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class IssuesChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }
  static defaultProps = {
    title: 'Issues',
    displayAspectRatio: true,
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom'
  };
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: this.props.displayAspectRatio,
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            maintainAspectRatio: this.props.displayAspectRatio,
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            maintainAspectRatio: this.props.displayAspectRatio,
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}
export default IssuesChart;
