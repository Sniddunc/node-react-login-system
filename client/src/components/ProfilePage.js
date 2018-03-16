import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfilePage extends Component {
  renderContent() {
    /*switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to="/login" />;
      default:
        return <p>Welcome, {this.props.auth.username}.</p>;
    }*/

    return <p>Welcome, {this.props.auth.username}.</p>;
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
  console.log(state);
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(ProfilePage);
