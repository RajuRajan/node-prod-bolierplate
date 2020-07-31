// Accessing process.env directly has a performance implication
// To help handle the above we cache the environment variable in an object
const cache = {};

const accessEnv = (key, defaultValue) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`"${key}" not found in process.env!`);
  }
  /* If key alreadys exists return from cache */
  if (cache[key]) return cache[key];
  /* Store key to cache & return value */
  cache[key] = process.env[key];
  return process.env[key];
};

export default accessEnv;
