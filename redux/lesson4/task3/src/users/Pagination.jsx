import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAviable = currentPage !== 1 ? true : false;
  const isNextPageAviable = currentPage !== Math.ceil(totalItems / itemsPerPage) ? true : false;

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
      <span className="pagination__page">{currentPage}</span>
      {nextButton}
    </div>
  );
};

export default Pagination;
