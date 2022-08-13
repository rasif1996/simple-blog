const {createContext, useContext} = require('react');

export const AuthContext = createContext({});

export const useAuthContext = () => {
	const value = useContext(AuthContext);

	return value;
};
