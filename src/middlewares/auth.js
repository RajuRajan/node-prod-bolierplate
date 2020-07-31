import Joi from '@hapi/joi';
import { wrapAsync } from '#utils/common';
import * as Errors from '#utils/error';

const validationSchema = Joi.alternatives([
  Joi.object({
    client_id: Joi.string().required(),
    client_secret: Joi.string().required(),
  }),
  Joi.object({
    Authorization: Joi.string().required(),
    appId: Joi.string().required(),
  }),
]).error(new Error('Authorization keys are required'));

async function authMiddleware(req, res, next) {
  next();
}

export default wrapAsync(authMiddleware);
