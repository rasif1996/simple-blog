import api from '../http';
import {IUser, IInfo} from '../types/models';
import {IUserService} from '../types/services';

class UserService implements IUserService {
	async getUsers(): Promise<IUser[]> {
		const data = await api.users.getUsers();

		return data;
	}

	async updateUser(info: FormData): Promise<IInfo> {
		const data = await api.users.updateUser(info);

		return data;
	}
}

export default new UserService();
