import {gql, parseType} from 'graphql-react-sdk';

export const itemType = parseType(gql`
  type BlogPost {
    Id: ID!
    Title: String
  }

  input BlogPostInput {
    Title: String
  }
`);
