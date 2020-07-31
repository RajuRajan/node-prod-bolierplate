import { Sequelize } from 'sequelize';
import accessEnv from '#utils/accessEnv';
import CONFIGURATION from '#sequelize/config';

const env = accessEnv('NODE_ENV', 'development');
const logging = accessEnv('DB_LOGGING', 'true') === 'true';

const DATABASE_CONFIG = CONFIGURATION[env];
const sequelize = new Sequelize({
  ...DATABASE_CONFIG,
  logging,
});

export default sequelize;
