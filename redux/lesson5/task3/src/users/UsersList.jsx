import React from 'react';
import User from './User';
import Filter from '../Filter';
import { connect } from 'react-redux';
import { filterTextSelector, usersListSelector } from '../users.selectors';
import { onChangeText } from '../users.actions';
import PropTypes from 'prop-types';

const UsersList = ({ users, filterText, onChangeText }) => {
  const count = users.length;
  const usersList = users.map(user => <User key={user.id} name={user.name} age={user.age} />);

  return (
    <div>
      <Filter
        filterText={filterText}
        count={count}
        onChange={event => onChangeText(event.target.value)}
      />
      <ul className="users">{usersList}</ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  onChangeText: onChangeText,
};

export default connect(mapState, mapDispatch)(UsersList);
