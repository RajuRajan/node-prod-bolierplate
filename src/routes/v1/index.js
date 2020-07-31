import { Router } from 'express';
import authMiddleware from '#middlewares/auth';

/* << APPLICATION ROUTES >> */
import userRouter from './user';
/* << ------------------ >> */

const router = Router();
router.use(authMiddleware);

router.use('/user', userRouter);

export default router;
