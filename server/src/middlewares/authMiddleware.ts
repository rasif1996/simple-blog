import {Request, Response, NextFunction} from 'express';
import ApiError from '@/exceptions/ApiError';
import tokenService from '@/services/tokenService';

const middleware = (req: Request, res: Response, next: NextFunction) => {
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

		req.user = userData;

		next();
	} catch (e) {
		next(ApiError.BadRequest('Что-то случилось при авторизации'));
	}
};

export default middleware;
