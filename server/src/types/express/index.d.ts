declare namespace Express {
	interface Request {
		user?: any;
		files?: {
			image?: any;
		};
	}
}
