import log4js from 'log4js';
import accessEnv from '#utils/accessEnv';
const ENV = accessEnv('NODE_ENV', 'development');

log4js.configure({
  appenders: {
    error: { type: 'file', filename: `logs/${ENV}.error.log` },
    console: { type: 'console' },
  },
  categories: {
    deployment: { appenders: ['error'], level: 'error' },
    development: { appenders: ['console'], level: 'debug' },
    default: { appenders: ['console'], level: 'info' },
  },
  pm2: true,
});

const category = ENV === 'development' ? 'development' : 'deployment';
const logger = log4js.getLogger(category);

export default logger;
