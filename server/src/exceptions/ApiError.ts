class ApiError extends Error {
	status: number;
	errors: Array<any>;

	constructor(status: number, message: string, errors: Array<any> = []) {
		super(message);

		this.status = status;
		this.errors = errors;
	}

	static BadRequest(message: string, errors: Array<any> = []) {
		return new ApiError(400, message, errors);
	}

	static Conflict(message: string, errors: Array<any> = []) {
		return new ApiError(409, message, errors);
	}

	static Unathorized() {
		return new ApiError(401, 'Unathorized');
	}
}

export default ApiError;
