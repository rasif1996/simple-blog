import * as yup from 'yup';

const schema = yup
	.object({
		email: yup.string().required('Почта обязательна').email('Невалидная почта'),
		password: yup.string().required('Пароль обязателен')
	})
	.required();

export default schema;
