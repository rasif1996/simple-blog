import {privateAxios} from '../axios';

const api = {
	async getUsers() {
		return await privateAxios.get('/api/users');
	},
	async updateUser(data) {
		return await privateAxios.patch(`/api/users`, data);
	}
};

export default api;
