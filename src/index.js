import express from 'express';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { server } from './graphql';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const checkJwt = jwt({
  credentialsRequired: false,
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI
  }),

  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: ['RS256']
});

const app = express();
app.use(checkJwt);

server.applyMiddleware({ app });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server ready`);
});
