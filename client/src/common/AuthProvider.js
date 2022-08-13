import {useEffect, useState} from 'react';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {hasToken} from 'common/utils';
import {AuthContext} from 'common/contexts/AuthContext';

function AuthProvider({children}) {
	const {
		select: {auth}
	} = useStore();

	const {
		auth: {refresh}
	} = useDispatch();

	const isAuthorized = useSelector(auth.getIsAuthorized);
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
