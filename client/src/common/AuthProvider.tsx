import {useEffect, useState} from 'react';
import {hasToken} from './utils';
import {AuthContext} from './contexts/AuthContext';
import useAppStore from '../hooks/useAppStore';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';

function AuthProvider({children}): JSX.Element {
	const {
		select: {auth}
	} = useAppStore();

	const {
		auth: {refresh}
	} = useAppDispatch();

	const isAuthorized = useAppSelector(auth.getIsAuthorized);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (hasToken()) {
			refresh();
		}

		setChecked(true);
	}, []);

	if (!checked) {
		return <p>Loading...</p>;
	}

	return <AuthContext.Provider value={isAuthorized}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
