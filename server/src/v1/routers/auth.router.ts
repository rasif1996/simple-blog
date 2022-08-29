import express from 'express';

import authController from '@/controllers/auth.controller';
import {registrationValidation, loginValidation} from '@/validations/auth.validator';
import validate from '@/middlewares/validation.middleware';
import async from '@/middlewares/async.middleware';

const router = express.Router();

router.post('/registration', validate(registrationValidation), async(authController.registration));
router.post('/login', validate(loginValidation), async(authController.login));
router.post('/logout', async(authController.logout));
router.get('/refresh', async(authController.refresh));
router.get('/activate/:link', async(authController.activate));

export default router;
