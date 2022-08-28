import express from 'express';

import authMiddleware from '@/middlewares/auth.middleware';
import postsController from '@/controllers/posts.controller';
import validate from '@/middlewares/validation.middleware';
import {createPostValidation} from '@/validations/posts.validator';

const router = express.Router();

router.post('/create', authMiddleware, validate(createPostValidation), postsController.createPost);

export default router;
