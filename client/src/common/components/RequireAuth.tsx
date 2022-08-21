import {useSelector} from 'react-redux';
import {Outlet, useLocation, Navigate} from 'react-router-dom';
import useAppStore from '../../hooks/useAppStore';

function RequireAuth() {
	const {
		select: {auth}
	} = useAppStore();

	const isAuth = useSelector(auth.getIsAuthorized);

	const location = useLocation();

	if (!isAuth) {
		return <Navigate to='/login' state={{from: location.pathname}} />;
	}

	return <Outlet />;
}

export default RequireAuth;
