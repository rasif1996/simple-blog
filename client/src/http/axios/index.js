import axios from 'axios';
import {SERVER_URL} from 'common/config';
import {STATUSES} from 'common/constants';
import {getToken} from 'common/utils';
import AuthService from 'services/AuthService';
import store from 'client';

export const publicAxios = axios.create({
	baseURL: SERVER_URL,
	withCredentials: true
});

export const privateAxios = axios.create({
	baseURL: SERVER_URL,
	withCredentials: true
});

privateAxios.interceptors.request.use(
	async config => {
		const accessToken = getToken();

		config.headers.authorization = `Bearer ${accessToken}`;

		return config;
	},
	e => Promise.reject(e)
);

privateAxios.interceptors.response.use(
	async response => response,
	async error => {
		const originalConfig = error.config;

		const {status} = error.response;

		if (status === STATUSES.UNAUTHORIZED && originalConfig && !originalConfig._retry) {
			originalConfig._retry = true;

			try {
				await AuthService.refresh();

				return privateAxios(originalConfig);
			} catch (e) {
				store.dispatch({type: 'user/logout'});

				return;
			}
		}

		return Promise.reject(error);
	}
);
