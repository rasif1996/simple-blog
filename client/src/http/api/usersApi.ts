import {IUser, IInfo} from '../../types/models';
import {privateAxios} from '../axios';
import {responseBody} from '../helpers';

const api = {
	getUsers(): Promise<IUser[]> {
		return privateAxios.get<IUser[]>('/api/users').then(responseBody);
	},
	updateUser(data: FormData): Promise<IInfo> {
		return privateAxios.patch<IInfo>(`/api/users`, data).then(responseBody);
	}
};

export default api;
