import {privateAxios, publicAxios} from '../axios';
import {responseBody} from '../helpers';
import {LoginFormType, RegistrationFormType} from '../../types/forms';
import {RegistrationResponseType, LoginResponseType, StatusResponseType} from '../../types/responses';

const api = {
	registration(data: RegistrationFormType): Promise<RegistrationResponseType> {
		return publicAxios.post<RegistrationResponseType>('/api/auth/registration', data).then(responseBody);
	},
	login(data: LoginFormType): Promise<LoginResponseType> {
		return publicAxios.post<LoginResponseType>('/api/auth/login', data).then(responseBody);
	},
	logout(): Promise<StatusResponseType> {
		return privateAxios.post<StatusResponseType>('/api/auth/logout').then(responseBody);
	},
	refresh(): Promise<LoginResponseType> {
		return publicAxios.get<LoginResponseType>('/api/auth/refresh').then(responseBody);
	}
};

export default api;
