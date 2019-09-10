import express from 'express';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { server } from './graphql';

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: ''
  }),

  audience: '',
  issuer: '',
  algorithms: ['RS256']
});

const app = express();
app.use(checkJwt);

server.applyMiddleware({ app });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server ready`);
});
