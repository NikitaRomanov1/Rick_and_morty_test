import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "../../query/character";
import {
  PopupContentStyle,
  ImgStyle,
  InfoCardStyle,
  HrStyle,
} from "../../styles/styles";

export const CharacterInfo = ({ id }) => {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      ids: id,
    },
  });
  console.log(data?.charactersByIds[0]);
  return (
    <>
      {error && <PopupContentStyle>Error</PopupContentStyle>}
      {loading && <PopupContentStyle>Loading...</PopupContentStyle>}
      {data && (
        <PopupContentStyle>
          <div>
            <ImgStyle src={data.charactersByIds[0].image} />
          </div>
          <InfoCardStyle>
            <div>Name: {data.charactersByIds[0].name}</div>
            <HrStyle />
            <div>Status: {data.charactersByIds[0].status}</div>
            <HrStyle />
            <div>Species: {data.charactersByIds[0].species}</div>
            <div>Gender: {data.charactersByIds[0].gender}</div>
            {data.charactersByIds[0].type && (
              <div>Type: {data.charactersByIds[0].type}</div>
            )}

            <div>
              Dimension:
              {data.charactersByIds[0].origin.dimension},
              {data.charactersByIds[0].origin.name},
              {data.charactersByIds[0].origin.type}
            </div>
            <div>First seen in: {data.charactersByIds[0].episode[0].name}</div>
          </InfoCardStyle>
        </PopupContentStyle>
      )}
    </>
  );
};
