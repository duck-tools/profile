import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  external: [
    'apollo-server-express',
    'express',
    'express-jwt',
    'jwks-rsa'
  ],
  plugins: [
    nodeResolve({}),
    commonjs({}),
    babel({ exclude: 'node_modules/**' })
  ]
};
