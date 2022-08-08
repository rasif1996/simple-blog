import {useSelector, useStore} from 'react-redux';
import {Outlet, useLocation, Navigate} from 'react-router-dom';

function RequireAuth() {
	const {
		select: {auth}
	} = useStore();

	const isAuth = useSelector(auth.getIsAuthorized);

	const location = useLocation();

	if (!isAuth) {
		return <Navigate to='/login' state={{from: location.pathname}} />;
	}

	return <Outlet />;
}

export default RequireAuth;
