import type {RootModel} from '.';
import {createModel} from '@rematch/core';
import AuthService from '../../services/AuthService';
import SubmissionError from '../../common/exceptions/SubmissionError';
import history from '../../common/history';
import {removeToken} from '../../common/utils';

type AuthStateType = boolean;

const initialState: AuthStateType = false;

const auth = createModel<RootModel>()({
	name: 'auth',
	state: initialState,
	reducers: {
		'user/login': () => true,
		'user/logout': () => false
	},
	effects: dispatch => ({
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

				dispatch.user.login(data.user);
			} catch (e) {
				throw new SubmissionError(e?.response?.data?.message);
			}
		},
		async logout() {
			await AuthService.logout();

			dispatch({type: 'user/logout'});
		},
		async refresh() {
			try {
				const data = await AuthService.refresh();

				dispatch.user.login(data.user);
			} catch (e) {
				console.log(e);

				removeToken();
			}
		}
	}),
	selectors: slice => ({
		getIsAuthorized() {
			return slice(state => state);
		}
	})
});

export default auth;
