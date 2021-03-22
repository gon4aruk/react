import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    filterText: '',
    count: this.props.users.length,
    usersList: this.props.users,
  };

  onChange = event => {
    const filteredUsersList = this.props.users.filter(user =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    this.setState({
      filterText: event.target.value,
      count: filteredUsersList.length,
      usersList: filteredUsersList,
    });
  };

  render() {
    const usersList = this.state.usersList.map(user => (
      <User key={user.id} name={user.name} age={user.age} />
    ));

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={this.state.count}
          onChange={this.onChange}
        />
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UsersList;
