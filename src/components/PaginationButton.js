import React from "react";
import { PaginationItemStyle } from "../styles/styles";
export const PaginationButton = ({ children, ...props }) => {
  return <PaginationItemStyle {...props}>{children}</PaginationItemStyle>;
};
