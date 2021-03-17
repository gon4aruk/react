import React from 'react';

const Toggler = () => {
  const handleButton = e => {
    e.target.textContent = e.target.textContent === 'Off' ? 'On' : 'Off';
  };
  return (
    <button className="toggler" onClick={handleButton}>
      Off
    </button>
  );
};

export default Toggler;
