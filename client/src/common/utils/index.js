const TOKEN_NAME = 'accessToken';

export const setToken = token => {
	localStorage.setItem(TOKEN_NAME, token);
};

export const removeToken = () => {
	localStorage.removeItem(TOKEN_NAME);
};

export const getToken = () => {
	return localStorage.getItem(TOKEN_NAME);
};

export const hasToken = () => {
	return Boolean(getToken());
};
