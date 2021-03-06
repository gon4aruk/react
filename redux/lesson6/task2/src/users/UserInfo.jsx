import React from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import { userDataSelector, isFetchingSelector } from '../users.selectors';
import PropTypes from 'prop-types';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }
  if (!userData) {
    return null;
  }
  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.shape(),
  isFetching: PropTypes.bool,
};

UserInfo.defaultValue = {
  userData: null,
};

const mapState = state => {
  return {
    userData: userDataSelector(state),
    isFetching: isFetchingSelector(state),
  };
};

export default connect(mapState)(UserInfo);
