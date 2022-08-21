import SubmissionError from '../common/exceptions/SubmissionError';

const withFormErrorHandler = (onSubmit, setError, clearErrors) => {
	return async (...args) => {
		try {
			await onSubmit(...args);

			clearErrors('submission');
		} catch (err) {
			if (err instanceof SubmissionError) {
				setError('submission', {type: 'custom', message: err.message});
			}
		}
	};
};

export default withFormErrorHandler;
