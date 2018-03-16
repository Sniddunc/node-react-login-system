import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ProfilePage from './ProfilePage';

const Home = () => (
  <div>
    <h1>Home</h1>
    <br />
    <Link to="/login">Log in</Link>
    <br />
    <Link to="/signup">Sign up</Link>
  </div>
);

const Login = () => (
  <div>
    <h1>Login</h1>
    <br />
    <form action="/auth/login" method="POST">
      <label>Username</label>
      <input type="text" name="username" />
      <br />
      <label>Password</label>
      <input type="password" name="password" />
      <input type="submit" name="submit" />
    </form>
    <br />
    <Link to="/">Home</Link>
  </div>
);

const Signup = () => (
  <div>
    <h1>Signup</h1>
    <br />
    <form action="/auth/signup" method="POST">
      <label>Username</label>
      <input type="text" name="username" />
      <br />
      <label>Password</label>
      <input type="password" name="password" />
      <input type="submit" name="submit" />
    </form>
    <br />
    <Link to="/">Home</Link>
  </div>
);

const PageNotFound = () => (
  <div>
    <h1>404</h1>
    <h1>Page not found</h1>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
