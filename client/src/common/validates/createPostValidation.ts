import * as yup from 'yup';

const schema = yup
	.object({
		title: yup.string().required('Заголовок обязателен'),
		text: yup.string().required('Текст обязатеелен')
	})
	.required();

export default schema;
