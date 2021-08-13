import {gql, parseType} from 'graphql-react-sdk';

export const itemType = parseType(gql`
  type NewsItem {
    Id: ID!
    Title: String
  }

  input NewsItemInput {
    Title: String
  }
`);
