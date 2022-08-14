const router = require('express').Router();
const userController = require('../../controllers/userController');
const authMiddleware = require('../../middlewares/authMiddleware');

router.get('/', authMiddleware, userController.getUsers);
router.patch('/:id', authMiddleware, userController.updateUser);

router.get('/:id', authMiddleware, userController.getUser);
router.post('/', authMiddleware, userController.createUser);
router.delete('/:id', authMiddleware, userController.deleteUser);
router.get('/:id/:items', authMiddleware, userController.getItemsOfUser);

module.exports = router;
