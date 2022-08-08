class ApiError extends Error {
	status;
	errors;

	constructor(status, message, errors = []) {
		super(message);

		this.status = status;
		this.errors = errors;
	}

	static BadRequest(message, errors) {
		return new ApiError(400, `Bad request: ${message}`, errors);
	}

	static Conflict(message, errors) {
		return new ApiError(409, `Conflict: ${message}`, erorrs);
	}

	static Unathorized() {
		return new ApiError(401, 'Unathorized');
	}
}

module.exports = ApiError;
