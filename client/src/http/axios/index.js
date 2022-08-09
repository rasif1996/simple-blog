import axios from 'axios';
import {SERVER_URL} from '../../common/config';
import {STATUSES} from '../../common/constants';
import {getToken} from '../../common/utils';
import AuthService from '../../services/AuthService';
import store from '../../client';

export const publicAxios = axios.create({
	baseURL: SERVER_URL,
	withCredentials: true
});

export const privateAxios = axios.create({
	baseURL: SERVER_URL,
	withCredentials: true
});

privateAxios.interceptors.request.use(
	async request => {
		const accessToken = getToken();

		request.headers.authorization = `Bearer ${accessToken}`;

		return request;
	},
	e => Promise.reject(e)
);

privateAxios.interceptors.response.use(
	async response => response,
	async error => {
		const originalRequest = error.config;

		const {status} = error.response;

		if (status === STATUSES.UNAUTHORIZED && originalRequest && !originalRequest._isRetry) {
			originalRequest._isRetry = true;

			try {
				await AuthService.refresh();

				return privateAxios.request(originalRequest);
			} catch (e) {
				store.dispatch({type: 'auth/logout'});

				return;
			}
		}

		return Promise.reject(error);
	}
);
