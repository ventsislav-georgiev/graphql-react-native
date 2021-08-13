import {gql, parseType} from 'graphql-react-sdk';

export const itemType = parseType(gql`
  type Book @withEditResponse {
    _id: ID
    title: String
    authorId: String
    author: Author
  }

  input BookInput {
    title: String
    authorId: String
  }

  type Author {
    _id: ID
    name: String
  }
`);
