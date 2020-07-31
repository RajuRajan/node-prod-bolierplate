import environment from 'dotenv-flow';
/* << Setup Node Environment >> */
environment.config({
  default_node_env: 'development',
  node_env: process.env.NODE_ENV,
  silent: true,
  path: 'env',
});
