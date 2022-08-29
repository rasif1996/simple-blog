import express from 'express';

import authMiddleware from '@/middlewares/auth.middleware';
import postsController from '@/controllers/posts.controller';
import validate from '@/middlewares/validation.middleware';
import async from '@/middlewares/async.middleware';
import {createPostValidation} from '@/validations/posts.validator';

const router = express.Router();

router.get('/', authMiddleware, async(postsController.getPosts));
router.post('/create', authMiddleware, validate(createPostValidation), async(postsController.createPost));

export default router;
