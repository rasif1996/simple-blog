import {removeToken, setToken} from '../common/utils';
import IAuthService from '../types/IAuthService';
import api from '../http';
import {ILoginData, ILoginResponse, IRegistrationData} from '../types';

class AuthService implements IAuthService {
	async registration(credentials: IRegistrationData): Promise<void> {
		await api.auth.registration(credentials);
	}

	async login(credentials: ILoginData): Promise<ILoginResponse> {
		const data = await api.auth.login(credentials);

		setToken(data.tokens.accessToken);

		return data;
	}

	async logout(): Promise<void> {
		removeToken();

		await api.auth.logout();
	}

	async refresh(): Promise<ILoginResponse> {
		const data = await api.auth.refresh();

		setToken(data.tokens.accessToken);

		return data;
	}
}

export default new AuthService();
