import {NextFunction, Request, Response} from 'express';

function asyncWrapper(fn: (req: Request, res: Response) => void) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await fn(req, res);
		} catch (e) {
			next(e);
		}
	};
}

export default asyncWrapper;
