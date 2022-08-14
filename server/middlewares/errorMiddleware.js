const ApiError = require('../exceptions/ApiError');

const middleware = (err, req, res, next) => {
	console.log(err);

	if (err instanceof ApiError) {
		return res.status(err.status).json({message: err.message, status: err.status, errors: err.errors});
	}

	return res.status(500).json({message: 'Непредвиденная ошибка', error: err.message, status: 500});
};

module.exports = middleware;
