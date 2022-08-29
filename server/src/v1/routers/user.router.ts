import express from 'express';

import userController from '@/controllers/user.controller';
import authMiddleware from '@/middlewares/auth.middleware';
import async from '@/middlewares/async.middleware';

const router = express.Router();

router.get('/', authMiddleware, async(userController.getUsers));
router.patch('/', authMiddleware, async(userController.updateUser));

router.get('/:id', authMiddleware, async(userController.getUser));
router.delete('/:id', authMiddleware, async(userController.deleteUser));
router.get('/:id/posts', authMiddleware, async(userController.getItemsOfUser));
router.post('/create', authMiddleware, async(userController.createUser));

export default router;
