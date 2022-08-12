import AuthService from '../../services/AuthService';
import SubmissionError from '../../common/exceptions/SubmissionError';
import history from '../../common/history';

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

				history.push('/login');
			} catch (e) {
				throw new SubmissionError(e?.response?.data?.message);
			}
		},
		async login(credentials) {
			try {
				const data = await AuthService.login(credentials);

				user.login(data.user);
			} catch (e) {
				throw new SubmissionError(e?.response?.data?.message);
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
