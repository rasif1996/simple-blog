import api from '../http';

class UserService {
	async getUsers() {
		const {data} = await api.users.getUsers();

		return data;
	}
}

export default new UserService();
