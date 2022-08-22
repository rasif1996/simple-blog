import {check} from 'express-validator';
import UserModel from '@/models/user.model';
import bcryptService from '@/services/bcrypt.service';

export const registrationValidation = [
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

export const loginValidation = [
	check('email')
		.exists()
		.withMessage('Поле email обязательно')
		.isEmail()
		.withMessage('Невалидная почта')
		.custom(value => {
			return UserModel.findOne({email: value}).then(user => {
				if (!user) {
					return Promise.reject('Неверный email');
				}
			});
		}),
	check('password')
		.exists()
		.withMessage('Поле password обязательно')
		.isLength({min: 3, max: 20})
		.withMessage('Невалидный пароль')
		.custom((value, {req}) => {
			return UserModel.findOne({email: req.body.email}).then(user => {
				if (!user) {
					return Promise.reject('Неверный email');
				}

				const isMatch = bcryptService.compare(value, user.password);

				if (!isMatch) {
					return Promise.reject('Неверный пароль');
				}
			});
		})
];
