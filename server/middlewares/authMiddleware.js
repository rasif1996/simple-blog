const ApiError = require('../exceptions/ApiError');
const tokenService = require('../services/tokenService');

const middleware = (req, res, next) => {
	try {
		const {authorization} = req.headers;

		if (!authorization) {
			return next(ApiError.Unathorized());
		}

		const tokenType = authorization.split(' ')[0];
		const token = authorization.split(' ')[1];

		if (tokenType !== 'Bearer' || !token) {
			return next(ApiError.Unathorized());
		}

		const userData = tokenService.validateAccessToken(token);

		if (!userData) {
			return next(ApiError.Unathorized());
		}

		res.user = userData;

		next();
	} catch (e) {
		next(ApiError.BadRequest('Что-то случилось при авторизации'));
	}
};

module.exports = middleware;
