const router = require('express').Router();
const userController = require('../../controllers/userController');
const authMiddleware = require('../../middlewares/authMiddleware');

router.get('/', authMiddleware, userController.getUsers);

module.exports = router;
