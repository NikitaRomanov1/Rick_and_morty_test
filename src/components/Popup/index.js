import React from "react";
import { CharacterInfo } from "../../CharacterInfo";
import { BackdropStyle } from "../../styles/styles";

export const Popup = ({ children, onClick, id }) => {
  console.log("Что пришло?", id);
  return (
    <BackdropStyle onClick={onClick}>
      <CharacterInfo id={id} />
    </BackdropStyle>
  );
};
