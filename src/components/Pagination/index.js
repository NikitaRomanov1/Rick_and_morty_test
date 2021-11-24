import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import { ArrowStyle, PagintaionContainerStyle } from "../../styles/styles";
import { PaginationButton } from "../PaginationButton";
export const Pagination = ({
  onPageChange,
  currentPage,
  totalPageCount,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    totalPageCount,
    currentPage,
    siblingCount,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PagintaionContainerStyle>
      <PaginationButton
        className={currentPage === 1 ? "disabled" : null}
        onClick={onPrevious}
      >
        <ArrowStyle className={"left"} />
      </PaginationButton>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <PaginationButton key={index}>&#8230;</PaginationButton>;
        }

        return (
          <PaginationButton
            key={index}
            className={pageNumber === currentPage ? "selected" : null}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        );
      })}

      <PaginationButton
        className={currentPage === lastPage ? "disabled" : null}
        onClick={onNext}
      >
        <ArrowStyle className="right" />
      </PaginationButton>
    </PagintaionContainerStyle>
  );
};

//export const MemoizedPagination = React.memo(Pagination);
