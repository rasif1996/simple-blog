import {removeToken, setToken} from '../common/utils';
import IAuthService from '../types/IAuthService';
import api from '../http';

class AuthService implements IAuthService {
	async registration(credentials) {
		await api.auth.registration(credentials);
	}

	async login(credentials) {
		const {data} = await api.auth.login(credentials);

		setToken(data.accessToken);

		return data;
	}

	async logout() {
		removeToken();

		await api.auth.logout();
	}

	async refresh() {
		const {data} = await api.auth.refresh();

		setToken(data.accessToken);

		return data;
	}
}

export default new AuthService();
