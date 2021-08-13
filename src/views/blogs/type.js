import {gql, parseType} from 'graphql-react-sdk';

export const itemType = parseType(gql`
  type Blog {
    Id: ID!
    Title: String
  }

  input BlogInput {
    Title: String
  }
`);
