import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';
import { connect } from 'react-redux';
import * as usersActions from '../users.actions';
import { usersListSelector, currentPageSelector } from '../users.selectors';
import PropTypes from 'prop-types';

class UsersList extends Component {
  goNext = () => {
    this.props.nextPage();
  };
  goPrev = () => {
    this.props.prevPage();
  };
  render() {
    const { usersList, currentPage } = this.props;
    const itemsPerPage = 3;

    const currentIndex = currentPage * itemsPerPage;
    const lastIndexInCurrentPage = currentIndex + itemsPerPage;

    return (
      <div>
        <Pagination
          goNext={this.goNext}
          goPrev={this.goPrev}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={usersList.length}
        />
        <ul className="users">
          {usersList.slice(currentIndex, lastIndexInCurrentPage).map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

UsersList.propTypes = {
  usersList: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  nextPage: usersActions.nextPage,
  prevPage: usersActions.prevPage,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
