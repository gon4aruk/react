import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, itemPerPage, totalItems }) => {
  const paginationCurrentPage = currentPage + 1;
  const prevButton =
    paginationCurrentPage === 1 ? (
      <button className="btn" disabled={true}></button>
    ) : (
      <button className="btn" onClick={goPrev}>
        ←
      </button>
    );

  const nextButton =
    paginationCurrentPage === Math.ceil(totalItems / itemPerPage) ? (
      <button className="btn" disabled={true}></button>
    ) : (
      <button className="btn" onClick={goNext}>
        →
      </button>
    );
  return (
    <div className="pagination">
      {prevButton}
      <span className="pagination__page">{paginationCurrentPage}</span>
      {nextButton}
    </div>
  );
};

export default Pagination;
