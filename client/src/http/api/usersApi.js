import {privateAxios} from '../axios';

const api = {
	async getUsers() {
		return await privateAxios.get('/api/users');
	},
	async updateUser(id, data) {
		return await privateAxios.patch(`/api/users/${id}`, data);
	}
};

export default api;
