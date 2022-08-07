const router = require('express').Router();
const authController = require('../../controllers/authController');
const {registrationValidation, loginValidation} = require('../../validations/authValidations');
const validate = require('../../middlewares/validationMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');

router.post('/registration', validate(registrationValidation), authController.registration);
router.post('/login', validate(loginValidation), authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.post('/refresh', authController.refresh);
router.get('/activate/:link', authController.activate);

module.exports = router;
