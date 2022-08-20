import {ErrorRequestHandler} from 'express';
import ApiError from '../exceptions/ApiError';

const middleware: ErrorRequestHandler = (err, req, res, next) => {
	console.log(err);

	if (err instanceof ApiError) {
		return res.status(err.status).json({message: err.message, status: err.status, errors: err.errors});
	}

	return res.status(500).json({message: 'Непредвиденная ошибка', error: err.message, status: 500});
};

export default middleware;
