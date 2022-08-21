import {Request, Response, NextFunction} from 'express';
import {ValidationChain, validationResult} from 'express-validator';
import ApiError from '@/exceptions/ApiError';

const middleware =
	(validations: ValidationChain[] = []) =>
	async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(validations.map(validation => validation.run(req)));

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const errorsArray = errors.array({onlyFirstError: true});

			return next(ApiError.BadRequest(errorsArray[0].msg, errorsArray));
		}

		next();
	};

export default middleware;
