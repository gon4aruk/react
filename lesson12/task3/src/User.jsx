import React, { Component } from 'react';

class User extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const prevPropsUserId = prevProps.match.params.userId;
    const currentPropsUserId = this.props.match.params.userId;
    if (prevPropsUserId !== currentPropsUserId) {
      this.fetchUser(this.props.match.params.userId);
    }
  }

  fetchUser = async userId => {
    await fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({ userData });
      });
  };

  render() {
    if (!this.state.userData) {
      return null;
    }

    const { avatar_url, name, location } = this.state.userData;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
