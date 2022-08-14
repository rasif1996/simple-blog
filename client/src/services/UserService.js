import api from 'http';

class UserService {
	async getUsers() {
		const {data} = await api.users.getUsers();

		return data;
	}

	async updateUser(userId, info) {
		const {data} = await api.users.updateUser(userId, info);

		return data;
	}
}

export default new UserService();
