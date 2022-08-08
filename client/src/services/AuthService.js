import {removeToken, setToken} from '../common/utils';
import api from '../http';

class AuthService {
	async registration(credentials) {
		await api.auth.registration(credentials);
	}

	async login(credentials) {
		const {data} = await api.auth.login(credentials);

		setToken(data.accessToken);

		return data;
	}

	async logout() {
		await api.auth.logout();

		removeToken();
	}

	async refresh() {
		const {data} = await api.auth.refresh();

		setToken(data.accessToken);

		return data;
	}
}

export default new AuthService();
