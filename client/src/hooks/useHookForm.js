import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import withFormErrorHandler from 'hocs/withFormErrorHandler';
import * as validations from 'common/validates';

function useHookForm({validate, ...settings} = {}) {
	const schema = validations[validate];

	const form = useForm({
		resolver: schema ? yupResolver(schema) : undefined,
		mode: 'onChange',
		...settings
	});

	const handleSubmit = onSubmit => {
		return form.handleSubmit(withFormErrorHandler(onSubmit, form.setError, form.clearErrors));
	};

	return {...form, handleSubmit};
}

export default useHookForm;
