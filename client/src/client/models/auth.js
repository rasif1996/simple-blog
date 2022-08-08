import AuthService from '../../services/AuthService';

const initialState = {
	isAuthorized: false
};

const auth = {
	name: 'auth',
	state: initialState,
	reducers: {
		changeAuth(state, payload) {
			state.isAuthorized = payload;
		}
	},
	effects: ({auth, user}) => ({
		async registration(credentials) {
			await AuthService.registration(credentials);
		},
		async login(credentials) {
			const data = await AuthService.login(credentials);

			auth.changeAuth(true);
			user.setUser(data.user);
		},
		async logout() {
			await AuthService.logout();

			auth.changeAuth(false);
			user.clearUser();
		},
		async refresh() {
			const data = await AuthService.refresh();

			auth.changeAuth(true);
			user.setUser(data.user);
		}
	}),
	selectors: slice => ({
		getIsAuthorized() {
			return slice(state => state.isAuthorized);
		}
	})
};

export default auth;
