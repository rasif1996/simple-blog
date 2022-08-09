import * as yup from 'yup';

const schema = yup
	.object({
		email: yup.string().required('Почта обязательна').email('Невалидная почта'),
		password: yup.string().required('Пароль обязателен').min(3, 'Пароль слишком короткий'),
		passwordConfirmation: yup
			.string()
			.required('Пароль обязателен')
			.min(3, 'Пароль слишком короткий')
			.oneOf([yup.ref('password')], 'Пароли не совпадают')
	})
	.required();

export default schema;
