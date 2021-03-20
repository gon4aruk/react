import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { goPrev, goNext, currentPage, totalItems, itemsPerPage } = this.props;
    const isPrevPageAviable = currentPage !== 1 ? true : false;
    const isNextPageAviable = currentPage !== Math.ceil(totalItems / itemsPerPage) ? true : false;

    const prevButton = isPrevPageAviable ? (
      <button className="btn" onClick={goPrev}>
        ←
      </button>
    ) : (
      <button className="btn" disabled={true}></button>
    );

    const nextButton = isNextPageAviable ? (
      <button className="btn" onClick={goNext}>
        →
      </button>
    ) : (
      <button className="btn" disabled={true}></button>
    );

    return (
      <div className="pagination">
        {prevButton}
        <span className="pagination__page">{currentPage}</span>
        {nextButton}
      </div>
    );
  }
}

export default Pagination;
