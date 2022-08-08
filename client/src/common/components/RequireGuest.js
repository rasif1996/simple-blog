import {useSelector, useStore} from 'react-redux';
import {Outlet, Navigate, useLocation} from 'react-router-dom';

function RequireGuest() {
	const {
		select: {auth}
	} = useStore();

	const isAuthorized = useSelector(auth.getIsAuthorized);

	const {state} = useLocation();

	if (isAuthorized) {
		return <Navigate to={state?.from || '/'} replace />;
	}

	return <Outlet />;
}

export default RequireGuest;
