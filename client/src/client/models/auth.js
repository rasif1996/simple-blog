import api from '../../http';

const initialState = {
	isAuth: false
};

const auth = {
	name: 'auth',
	state: initialState,
	reducers: {
		changeAuth(state, payload) {
			state.isAuth = payload;
		}
	},
	effects: dispatch => ({
		async registration({email, password, passwordConfirmation}) {
			await api.auth.registration({email, password, passwordConfirmation});
		},
		async login({email, password}) {
			const {data} = await api.auth.login({email, password});

			dispatch.auth.changeAuth(true);
			dispatch.user.setUser(data.user);

			localStorage.setItem('accessToken', data.accessToken);
		},
		async logout() {
			await api.auth.logout();

			dispatch.auth.changeAuth(false);
			dispatch.user.clearUser();

			localStorage.removeItem('accessToken');
		}
	}),
	selectors: slice => ({
		getIsAuth() {
			return slice(state => state.isAuth);
		}
	})
};

export default auth;
