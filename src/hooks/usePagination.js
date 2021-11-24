import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
export const DOTS = "...";
export const usePagination = ({
  totalPageCount,
  siblingCount = 1,
  currentPage,
}) => {
  const pagintaionRange = useMemo(() => {
    let totalPageNumbers = siblingCount + 5;

    if (totalPageCount <= 6) {
      totalPageNumbers = totalPageCount;
      return range(1, totalPageNumbers);
    }
    //левая и правая страница от текущей
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
    //троеточие слева и справа
    const showLeftDots = leftSiblingIndex > 3;
    const showRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    //показывать только правое троеточие
    if (!showLeftDots && showRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }
    //показывать только левое троеточие
    if (showLeftDots && !showRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (showLeftDots && showRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [siblingCount, currentPage, totalPageCount]);

  return pagintaionRange;
};
