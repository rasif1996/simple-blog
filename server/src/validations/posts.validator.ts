import {check} from 'express-validator';

export const createPostValidation = [
	check('title').exists().withMessage('Заголовок пустой'),
	check('text').exists().withMessage('Текст пустой')
];
