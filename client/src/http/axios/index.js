import axios from 'axios';
import api from '..';
import {SERVER_URL} from '../../common/config';

export const publicAxios = axios.create({
	baseURL: SERVER_URL,
	withCredentials: true
});

export const privateAxios = axios.create({
	baseURL: SERVER_URL,
	withCredentials: true
});

privateAxios.interceptors.request.use(request => {
	const accessToken = localStorage.getItem('accessToken');

	request.headers.authorization = `Bearer ${accessToken}`;

	return request;
});

privateAxios.interceptors.response.use(
	response => response,
	async error => {
		const request = error.request;

		if (request && !request.isFirst) {
			request.isFirst = true;

			try {
				const {data} = await api.auth.refresh();

				localStorage.setItem('accessToken', data.accessToken);

				return await axios(request);
			} catch (e) {}
		}
	}
);
