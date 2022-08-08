import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {hasToken} from './utils';

function AuthProvider({children}) {
	const [checked, setChecked] = useState(false);

	const {
		auth: {refresh}
	} = useDispatch();

	useEffect(() => {
		if (hasToken()) {
			refresh();
		}

		setChecked(true);
	}, []);

	if (!checked) {
		return <p>Loading...</p>;
	}

	return children;
}

export default AuthProvider;
