import React from 'react';

const Greeting = props => {
  const age =
    Math.floor(((new Date().getTime() - new Date(props.birthDate)) / (24 * 3600 * 365 * 1000)));
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {age} years old
    </div>
  );
};

export default Greeting;
