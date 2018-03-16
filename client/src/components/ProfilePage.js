import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfilePage extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <p>NOT LOGGED IN</p>;
      default:
        return <p>Welcome, {this.props.auth.username}.</p>;
    }
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <br />
        {this.renderContent()}
        <br />
        <a href="/api/logout">Log out</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.auth);
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(ProfilePage);
