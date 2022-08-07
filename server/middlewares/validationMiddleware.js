const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/ApiError');

const middleware =
	(validations = []) =>
	async (req, res, next) => {
		await Promise.all(validations.map(validation => validation.run(req)));

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return next(ApiError.BadRequest('Введенные данные неверные', errors.array({onlyFirstError: true})));
		}

		next();
	};

module.exports = middleware;
