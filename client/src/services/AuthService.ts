import {removeToken, setToken} from '../common/utils';
import {IAuthService} from '../types/services';
import api from '../http';
import {LoginFormType, RegistrationFormType} from '../types/forms';
import {LoginResponseType} from '../types/responses';

class AuthService implements IAuthService {
	async registration(credentials: RegistrationFormType): Promise<void> {
		await api.auth.registration(credentials);
	}

	async login(credentials: LoginFormType): Promise<LoginResponseType> {
		const data = await api.auth.login(credentials);

		setToken(data.tokens.accessToken);

		return data;
	}

	async logout(): Promise<void> {
		removeToken();

		await api.auth.logout();
	}

	async refresh(): Promise<LoginResponseType> {
		const data = await api.auth.refresh();

		setToken(data.tokens.accessToken);

		return data;
	}
}

export default new AuthService();
