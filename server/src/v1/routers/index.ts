import express from 'express';

import homeRouter from './home.router';
import userRouter from './user.router';
import authRouter from './auth.router';
import postsRouter from './posts.router';

const router = express.Router();

router.use('/', homeRouter);

router.use('/api/users', userRouter);
router.use('/api/auth', authRouter);
router.use('/api/posts', postsRouter);

export default router;
