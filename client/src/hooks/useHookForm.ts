import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import withFormErrorHandler from '../hocs/withFormErrorHandler';
import * as validations from '../common/validates';

function useHookForm<T>({validate, ...settings}: any = {}) {
	const schema = validations[validate];

	const methods = useForm<T>({
		resolver: schema ? yupResolver(schema) : undefined,
		mode: 'onChange',
		...settings
	});

	const handleSubmit = onSubmit => {
		return methods.handleSubmit(withFormErrorHandler(onSubmit, methods.setError, methods.clearErrors));
	};

	return {...methods, handleSubmit};
}

export default useHookForm;
