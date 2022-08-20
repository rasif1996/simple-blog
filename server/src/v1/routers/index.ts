import express from 'express';

import homeRouter from './homeRouter';
import userRouter from './userRouter';
import authRouter from './authRouter';

const router = express.Router();

router.use('/', homeRouter);
router.use('/api/users', userRouter);
router.use('/api/auth', authRouter);

export default router;
