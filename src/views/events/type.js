import {gql, parseType} from 'graphql-react-sdk';

export const itemType = parseType(gql`
  type Event {
    Id: ID!
    Title: String
  }

  input EventInput {
    Title: String
  }
`);
