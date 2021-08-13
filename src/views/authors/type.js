import {gql, parseType} from 'graphql-react-sdk';

export const itemType = parseType(gql`
  type Author @withEditResponse {
    _id: ID
    name: String
  }

  input AuthorInput {
    name: String
  }
`);
