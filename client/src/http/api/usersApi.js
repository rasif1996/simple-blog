import {privateAxios} from '../axios';

const api = {
	async getUsers() {
		return await privateAxios.get('/api/users');
	}
};

export default api;
