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
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;
// export const FILTER_ALL_CHARACTERS = gql`
//   query getCharacters($name: String!) {
//     characters(filter: { name: $name }) {
//       info {
//         count
//       }
//       results {
//         name
//         status
//         species
//         type
//         gender
//         image
//       }
//     }
//   }
// `;
