const router = require('express').Router();
const homeRouter = require('./homeRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');

router.use('/', homeRouter);
router.use('/api/users', userRouter);
router.use('/api/auth', authRouter);

module.exports = router;
