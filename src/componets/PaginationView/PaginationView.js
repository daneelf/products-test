import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./PaginationView.scss";
import { deepCopy } from "../../utils/deepCopy";
import cs from "classnames";

const PaginationView = ({ currentPage, dataPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumbersCopy = deepCopy(pageNumbers);
  const firstIndexValue = pageNumbersCopy[0];
  const lastIndexValue = pageNumbersCopy.slice(-1)[0];
  const nextButtonStyle = cs({
    disabled: lastIndexValue === currentPage,
  });
  const previousButtonStyle = cs({
    disabled: firstIndexValue === currentPage,
  });
  return (
    <Pagination className="align-items-center justify-content-center m-4">
      <Pagination.Prev
        className={previousButtonStyle}
        onClick={() => paginate(currentPage - 1)}
      />

      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          className={`${currentPage === number ? "active" : ""}`}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        className={nextButtonStyle}
        onClick={() => paginate(currentPage + 1)}
      />
    </Pagination>
  )
}

export default PaginationView;
