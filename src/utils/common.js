import uuid from 'uuid/v4';
import moment from 'moment';

// Wrapper for async resolver functions to catch & handle any errors to delegate to common error handler
export const wrapAsync = fn => (req, res, next) => {
  const fnReturn = fn(req, res, next);
  return Promise.resolve(fnReturn).catch(next);
};

/* Generate UUID */
export const generateUUID = () => uuid();

export const convertToIST = date => moment(date).utcOffset('+05:30').format();

export const typeCheck = async param => {
  let type = typeof param;
  if (type === 'string') return Promise.resolve(JSON.parse(param));
  else return Promise.resolve(param);
};
