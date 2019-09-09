import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    displayName: String
    picture: String
  }
`;

const resolvers = {
  Query: {
    me() {
      return {};
    }
  }
};

export const server = new ApolloServer({ typeDefs, resolvers });
