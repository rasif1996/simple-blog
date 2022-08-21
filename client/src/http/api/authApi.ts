import {ILoginData, IRegistrationData, IRegistrationResponse, ILoginResponse, IStatusResponse} from '../../types';
import {privateAxios, publicAxios} from '../axios';
import {responseBody} from '../helpers';

const api = {
	registration(data: IRegistrationData): Promise<IRegistrationResponse> {
		return publicAxios.post<IRegistrationResponse>('/api/auth/registration', data).then(responseBody);
	},
	login(data: ILoginData): Promise<ILoginResponse> {
		return publicAxios.post<ILoginResponse>('/api/auth/login', data).then(responseBody);
	},
	logout(): Promise<IStatusResponse> {
		return privateAxios.post<IStatusResponse>('/api/auth/logout').then(responseBody);
	},
	refresh(): Promise<ILoginResponse> {
		return publicAxios.get<ILoginResponse>('/api/auth/refresh').then(responseBody);
	}
};

export default api;
