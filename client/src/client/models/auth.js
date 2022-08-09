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
				console.log(e);
			}
		},
		async login(credentials) {
			try {
				const data = await AuthService.login(credentials);

				user.login(data.user);
			} catch (e) {
				console.log(e);
			}
		},
		async logout() {
			try {
				await AuthService.logout();

				user.logout();
			} catch (e) {
				console.log(e);
			}
		},
		async refresh() {
			try {
				const data = await AuthService.refresh();

				user.login(data.user);
			} catch (e) {
				console.log(e);
			}
		}
	}),
	selectors: slice => ({
		getIsAuthorized() {
			return slice(state => state);
		}
	})
};

export default auth;
