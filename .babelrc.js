module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '#src': './src',
          '#db': './src/db',
          '#api': './src/api',
          '#utils': './src/utils',
          '#routes': './src/routes',
          '#sequelize': './sequelize',
          '#middlewares': './src/middlewares',
          '#controllers': './src/controllers',
          '#jobs': './src/jobs',
        },
      },
    ],
  ],
  env: {
    development: {
      sourceMaps: true,
      retainLines: true,
    },
  },
};
