import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './queries';

export const server = new ApolloServer({ typeDefs, resolvers });
