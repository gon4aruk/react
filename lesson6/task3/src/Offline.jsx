import React from 'react';

const Offline = ({ setState }) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={setState}>
        Reconnect
      </button>
    </>
  );
};

export default Offline;
