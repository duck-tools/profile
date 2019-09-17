import { ApolloServer } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { typeDefs, resolvers } from './queries';

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);
export const server = new ApolloServer({ schema });
