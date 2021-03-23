import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class Page extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userName);
  }

  fetchUser = userName => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          userData,
        });
      });
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default Page;
