import React from 'react';
const BoilingVerdict = props => {
  const { celsius } = props;
  if (celsius >= 100) {
    return <p>Вода закипит. </p>;
  }
  return <p>Вода не закипит.</p>;
};

export default BoilingVerdict;
