import logger from '#utils/logger';

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const error = err.type || 'Internal Server Error';
  const message = err.message.length ? err.message : 'Something went wrong';
  logger.error(err);
  return res.status(statusCode).json({
    error,
    message,
    statusCode,
  });
}

export default errorHandler;
