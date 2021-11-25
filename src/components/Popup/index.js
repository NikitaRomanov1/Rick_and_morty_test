import React from "react";
import { CharacterInfo } from "../CharacterInfo";
import { BackdropStyle } from "../../styles/styles";

export const Popup = ({ onClick, id }) => {
  return (
    <BackdropStyle onClick={onClick}>
      <CharacterInfo id={id} />
    </BackdropStyle>
  );
};
