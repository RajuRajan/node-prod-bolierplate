import { Router } from 'express';
import Joi from '@hapi/joi';

import * as Errors from '#utils/error';
import userController from '#controllers/user';
import { wrapAsync } from '#utils/common';

const router = Router();

export default router;
