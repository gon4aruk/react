import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  console.log(isOnline);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return <div className="status">online</div>;
  }
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
