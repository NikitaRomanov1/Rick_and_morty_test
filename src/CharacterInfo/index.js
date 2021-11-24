import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "../query/character";

export const CharacterInfo = ({ id }) => {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      ids: id,
    },
  });
  console.log(data);
  return (
    <>
      {error && <h1>Error</h1>}
      {loading && <h1>Loading...</h1>}
      {data && <h1>{data.charactersByIds[0].name}</h1>}
    </>
  );
};
