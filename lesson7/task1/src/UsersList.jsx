import React, { Component } from 'react';
import User from './user';

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
    const sortedUsersList =
      this.state.sorting === 'asc'
        ? this.props.users.slice().sort((a, b) => a.age - b.age)
        : this.props.users.slice().sort((a, b) => b.age - a.age);

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
