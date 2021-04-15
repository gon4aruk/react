import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ count, filterText, onChange }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={filterText} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  count: PropTypes.number.isRequired,
  filterText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
