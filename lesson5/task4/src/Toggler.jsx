import React from 'react';

const Toggler = () => {
  const handleButton = e => {
    e.target.textContent = e.target.textContent === 'Off' ? 'On' : 'Off';
  };
  return (
    <div className="toggler" onClick={handleButton}>
      Off
    </div>
  );
};

export default Toggler;
