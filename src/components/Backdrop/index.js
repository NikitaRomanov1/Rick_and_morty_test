import React from "react";
import { BackdropStyle } from "../../styles/styles";

export const Backdrop = ({ children, onClick }) => {
  return <BackdropStyle onClick={onClick}>{children}</BackdropStyle>;
};
