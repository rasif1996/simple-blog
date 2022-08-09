const {check} = require('express-validator');
const UserModel = require('../models/UserModel');

exports.registrationValidation = [
	check('email')
		.exists()
		.withMessage('Поле email обязательно')
		.isEmail()
		.withMessage('Невалидная почта')
		.custom(value => {
			return UserModel.findOne({email: value}).then(user => {
				if (user) {
					return Promise.reject('Почта уже существует');
				}
			});
		}),
	check('password')
		.exists()
		.withMessage('Поле password обязательно')
		.isLength({min: 3, max: 20})
		.withMessage('Невалидный пароль'),
	check('passwordConfirmation')
		.exists()
		.withMessage('Повторите пароль')
		.custom((value, {req}) => {
			if (value !== req.body.password) {
				return Promise.reject('Пароль не соответствует');
			}

			return true;
		})
];

exports.loginValidation = [
	check('email').exists().withMessage('Поле email обязательно').isEmail().withMessage('Невалидная почта'),
	check('password')
		.exists()
		.withMessage('Поле password обязательно')
		.isLength({min: 3, max: 20})
		.withMessage('Невалидный пароль')
];
