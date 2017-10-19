import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      oneUser: {
        username: '',
        repo: ''
      }
    };
  }
  handleChange(event) {
    console.log(this.state);
    this.setState(
      update(this.state, {
        oneUser: {
          $merge: {
            [event.target.name]: event.target.value
          }
        }
      })
    );
  }
  handleSubmit(event) {
    event.preventDefault();

    axios.request({
      method: 'POST',
      url: 'http://localhost:3000/issues/baniyapratik/Github_UI'
    });
  }
  render() {
    return (
      <div>
        <h2 align="center">User Input</h2>
        <div className="container">
          <div className="small-container margin-top-20">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="well">
                <div className="bold margin-top-20">Username</div>
                <div className="margin-top-20">
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Your Git username"
                    required
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="bold margin-top-20">Repo Name</div>
                <div className="margin-top-20">
                  <input
                    name="repo"
                    type="text"
                    className="form-control"
                    placeholder="Name of Git Repository"
                    required
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="margin-top-20 txt-right">
                  <Link
                    to={`/issues/baniyapratik/Github_UI`}
                    className="btn btn-primary"
                  >
                    Issues
                  </Link>
                  <Link
                    to={`/pullrequest/baniyapratik/Github_UI`}
                    className="btn btn-primary"
                  >
                    Pull Requests
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Users;
