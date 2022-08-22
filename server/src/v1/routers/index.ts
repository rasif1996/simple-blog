import express from 'express';

import homeRouter from './home.router';
import userRouter from './user.router';
import authRouter from './auth.router';

const router = express.Router();

router.use('/', homeRouter);
router.use('/api/users', userRouter);
router.use('/api/auth', authRouter);

export default router;
