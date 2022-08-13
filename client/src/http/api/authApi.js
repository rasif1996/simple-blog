import {privateAxios, publicAxios} from '../axios';

const api = {
	async registration(data) {
		return await publicAxios.post('/api/auth/registration', data);
	},
	async login(data) {
		return await publicAxios.post('/api/auth/login', data);
	},
	async logout() {
		return await privateAxios.post('/api/auth/logout');
	},
	async refresh() {
		return await publicAxios.get('/api/auth/refresh');
	}
};

export default api;
