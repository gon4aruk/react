import React from 'react';
import UserForm from './UserForm';

const Profile = ({ userData, handleChange }) => {
  return (
    <div className="column">
      <UserForm handleChange={handleChange} userData={userData} />
    </div>
  );
};

export default Profile;
