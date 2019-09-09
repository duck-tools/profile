export const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    displayName: String
    picture: String
  }
`;

export const resolvers = {
  Query: {
    me() {
      return {};
    }
  }
};
