import express from 'express';

import authController from '@/controllers/auth.controller';
import {registrationValidation, loginValidation} from '@/validations/auth.validator';
import validate from '@/middlewares/validation.middleware';

const router = express.Router();

router.post('/registration', validate(registrationValidation), authController.registration);
router.post('/login', validate(loginValidation), authController.login);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);
router.get('/activate/:link', authController.activate);

export default router;
