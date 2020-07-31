/* Process handler to control application termination */
(() => {
  /* SIGINT - Signal thrown before killing the server */
  process.on('SIGINT', () => {
    console.warn('\nApp terminated 🚧');
    process.exit(1);
  });
  /* Handle any uncaught exception */
  process.on('uncaughtException', e => {
    console.error(e);
    process.exit(e ? 1 : 0);
  });
  /* Handle any unhandled rejection */
  process.on('unhandledRejection', e => {
    console.error(e);
    process.exit(e ? 1 : 0);
  });
})();
