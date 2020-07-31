import { Router } from 'express';
const router = Router();
import v1 from './v1';

router.get('/health-check', (req, res) => {
  return res.json({
    message: 'Active',
    pid: process.pid,
    uptime: process.uptime(),
  });
});

router.use('/v1', v1);

export default router;
