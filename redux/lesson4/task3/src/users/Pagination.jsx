import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, itemsPerPage, totalItems }) => {
  const prevButton =
    currentPage === 1 ? (
      <button className="btn" disabled={true}></button>
    ) : (
      <button className="btn" onClick={goPrev}>
        ←
      </button>
    );

  const nextButton =
    currentPage === Math.ceil(totalItems / itemsPerPage) ? (
      <button className="btn" disabled={true}></button>
    ) : (
      <button className="btn" onClick={goNext}>
        →
      </button>
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
