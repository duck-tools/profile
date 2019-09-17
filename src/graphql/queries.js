import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    me: User
  }

  type User @key(fields: "displayName") {
    displayName: String
    picture: String
  }
`;

export const resolvers = {
  Query: {
    me() {
      return {
        displayName: 'foo',
        picture: 'bar'
      };
    },
    User: {
      __resolveReference(user) {
        return user;
      }
    }
  }
};
