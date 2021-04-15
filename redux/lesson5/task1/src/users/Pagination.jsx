import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const paginationPage = currentPage + 1;
  const isPrevPageAviable = paginationPage !== 1 ? true : false;
  const isNextPageAviable = paginationPage !== Math.ceil(totalItems / itemsPerPage) ? true : false;

  const prevButton = isPrevPageAviable ? (
    <button className="btn" onClick={goPrev}>
      ←
    </button>
  ) : (
    <button className="btn" disabled></button>
  );

  const nextButton = isNextPageAviable ? (
    <button className="btn" onClick={goNext}>
      →
    </button>
  ) : (
    <button className="btn" disabled></button>
  );

  return (
    <div className="pagination">
      {prevButton}
      <span className="pagination__page">{paginationPage}</span>
      {nextButton}
    </div>
  );
};

Pagination.propTypes = {
  goPrev: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
