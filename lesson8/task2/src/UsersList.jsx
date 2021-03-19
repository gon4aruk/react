import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sorting: null,
    };
  }

  toggleSorting = () => {
    this.setState({
      sorting: this.state.sorting === 'asc' ? 'desc' : 'asc',
    });
  };

  render() {
    let sortedUsersList;
    if (this.state.sorting) {
      sortedUsersList =
        this.state.sorting === 'asc'
          ? this.props.users.slice().sort((a, b) => a.age - b.age)
          : this.props.users.slice().sort((a, b) => b.age - a.age);
    } else {
      sortedUsersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {sortedUsersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
