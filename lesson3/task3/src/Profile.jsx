import React from 'react';
import moment from 'moment';
import './profile.scss';

const Profile = props => {
  const birthDate = moment(props.userData.birthDate).format('DD MMM YY');
  return (
    <div className="profile">
      <div className="profile__name">
        My name is {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        Was born {birthDate} in {props.userData.birthPlace}
      </div>
    </div>
  );
};

export default Profile;
