const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/ApiError');

const middleware =
	(validations = []) =>
	async (req, res, next) => {
		await Promise.all(validations.map(validation => validation.run(req)));

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const errorsArray = errors.array({onlyFirstError: true});

			return next(ApiError.BadRequest(errorsArray[0].msg, errorsArray));
		}

		next();
	};

module.exports = middleware;
