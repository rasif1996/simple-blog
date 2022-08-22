import express from 'express';

import userController from '@/controllers/user.controller';
import authMiddleware from '@/middlewares/auth.middleware';

const router = express.Router();

router.get('/', authMiddleware, userController.getUsers);
router.patch('/', authMiddleware, userController.updateUser);

router.get('/:id', authMiddleware, userController.getUser);
router.post('/', authMiddleware, userController.createUser);
router.delete('/:id', authMiddleware, userController.deleteUser);
router.get('/:id/:items', authMiddleware, userController.getItemsOfUser);

export default router;
