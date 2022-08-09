import AuthService from '../../services/AuthService';

const initialState = false;

const auth = {
	name: 'auth',
	state: initialState,
	reducers: {
		'user/login': () => true,
		'user/logout': () => false
	},
	effects: ({user}) => ({
		async registration(credentials) {
			try {
				await AuthService.registration(credentials);
			} catch (e) {
				return e.response?.data?.errors;
			}
		},
		async login(credentials) {
			try {
				const data = await AuthService.login(credentials);

				user.login(data.user);
			} catch (e) {
				return e.response?.data?.errors;
			}
		},
		async logout() {
			await AuthService.logout();

			user.logout();
		},
		async refresh() {
			const data = await AuthService.refresh();

			user.login(data.user);
		}
	}),
	selectors: slice => ({
		getIsAuthorized() {
			return slice(state => state);
		}
	})
};

export default auth;
