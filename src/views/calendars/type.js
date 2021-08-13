import {gql, parseType} from 'graphql-react-sdk';

export const itemType = parseType(gql`
  type Calendar {
    Id: ID!
    Title: String
  }

  input CalendarInput {
    Title: String
  }
`);
