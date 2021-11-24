import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query getCharacters(
    $name: String!
    $page: Int
    $gender: String
    $status: String
    $species: String
    $type: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        gender: $gender
        status: $status
        species: $species
        type: $type
      }
    ) {
      info {
        pages
      }
      results {
        id
        image
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query getCharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      name
      status
      species
      type
      gender
      origin {
        name
        type
        dimension
        created
      }
      image
      created
    }
  }
`;
