import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';
import { connect } from 'react-redux';
import * as usersActions from '../users.actions';

class UsersList extends Component {
  goNext = () => {
    this.props.nextPage();
  };
  goPrev = () => {
    this.props.prevPage();
  };
  render() {
    const { users } = this.props;
    const itemsPerPage = 3;

    const currentIndex = users.currentPage * itemsPerPage;
    const lastIndexInCurrentPage = currentIndex + itemsPerPage;

    return (
      <div>
        <Pagination
          goNext={this.goNext}
          goPrev={this.goPrev}
          currentPage={this.props.users.currentPage}
          itemPerPage={itemsPerPage}
          totalItems={this.props.users.usersList.length}
        />
        <ul className="users">
          {users.usersList
          .slice(currentIndex, lastIndexInCurrentPage)
          .map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state,
  };
};

const mapDispatch = {
  nextPage: usersActions.nextPage,
  prevPage: usersActions.prevPage,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
