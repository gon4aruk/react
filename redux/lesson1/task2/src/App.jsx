import React, { useState } from 'react';
import Clock from './Clock';

const Page = () => {
  const [status, setStatus] = useState(true);

  return (
    <>
      {status && (
        <>
          <Clock location="New York" offset={-5} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="London" offset={0} />
        </>
      )}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </>
  );
};

export default Page;
