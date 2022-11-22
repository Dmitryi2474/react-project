import React from 'react';
import ReactPaginate from 'react-paginate';

import classes from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={classes.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected +1)}
      pageRangeDisplayed={4}
      pageCount={4}
      forcePage={currentPage -1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
