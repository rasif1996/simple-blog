import express from 'express';

import homeController from '@/controllers/home.controller';
import async from '@/middlewares/async.middleware';

const router = express.Router();

router.get('/', async(homeController.index));

export default router;
