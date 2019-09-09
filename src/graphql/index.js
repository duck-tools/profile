import { ApolloServer, gql } from 'apollo-server';
import { typeDefs, resolvers } from './queries';

export const server = new ApolloServer({ typeDefs, resolvers });
