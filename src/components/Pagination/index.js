import React from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export const MyPagination = ({ totalCount, skip, first, onChange }) => {
  const pageCount = Math.ceil(totalCount / first);
  const currentPage = skip / first;

  const gotoPage = page => () => {
    if (page !== currentPage) {
      onChange({
        skip: page * 5,
        first,
      });
    }
  };

  const nextPage = () => {
    if (currentPage < pageCount) {
      onChange({
        skip: (currentPage + 1) * 5,
        first,
      });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      onChange({
        skip: (currentPage - 1) * 5,
        first,
      });
    }
  };

  return (
    <Pagination>
      <PaginationItem disabled={currentPage === 0}>
        <PaginationLink first onClick={prevPage} />
      </PaginationItem>
      <PaginationItems
        pageCount={pageCount}
        currentPage={currentPage}
        onChange={gotoPage}
      />
      <PaginationItem disabled={currentPage === pageCount - 1}>
        <PaginationLink last onClick={nextPage} />
      </PaginationItem>
    </Pagination>
  );
};

const PaginationItems = ({ pageCount, currentPage, onChange }) => {
  let items = [];
  for (let i = 0; i < pageCount; i++) {
    items.push(
      <PaginationItem active={currentPage === i} key={i}>
        <PaginationLink onClick={onChange(i)}>{i + 1}</PaginationLink>
      </PaginationItem>
    );
  }
  return items;
};

MyPagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  skip: PropTypes.number.isRequired,
  first: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

PaginationItems.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
