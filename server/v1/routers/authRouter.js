const router = require('express').Router();
const authController = require('../../controllers/authController');
const {registrationValidation, loginValidation} = require('../../validations/authValidations');
const validate = require('../../middlewares/validationMiddleware');

router.post('/registration', validate(registrationValidation), authController.registration);
router.post('/login', validate(loginValidation), authController.login);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);
router.get('/activate/:link', authController.activate);

module.exports = router;
