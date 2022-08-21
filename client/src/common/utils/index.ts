const TOKEN_NAME = 'accessToken';

export const setToken = (token: string) => {
	localStorage.setItem(TOKEN_NAME, token);
};

export const removeToken = () => {
	localStorage.removeItem(TOKEN_NAME);
};

export const getToken = (): string => {
	return localStorage.getItem(TOKEN_NAME);
};

export const hasToken = (): boolean => {
	return Boolean(getToken());
};
