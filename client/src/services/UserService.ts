import api from '../http';
import IInfo from '../types/IInfo';
import IUser from '../types/IUser';
import IUserService from '../types/IUserService';

class UserService implements IUserService {
	async getUsers(): Promise<IUser[]> {
		const {data} = await api.users.getUsers();

		return data;
	}

	async updateUser(info: FormData): Promise<IInfo> {
		const {data} = await api.users.updateUser(info);

		return data;
	}
}

export default new UserService();
