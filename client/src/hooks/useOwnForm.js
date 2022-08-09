import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

function useOwnForm({schema, ...settings} = {}) {
	return useForm({
		resolver: schema ? yupResolver(schema) : undefined,
		mode: 'onChange',
		...settings
	});
}

export default useOwnForm;
