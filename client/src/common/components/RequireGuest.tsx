import {useSelector} from 'react-redux';
import {Outlet, Navigate, useLocation} from 'react-router-dom';
import useAppStore from '../../hooks/useAppStore';

function RequireGuest() {
	const {
		select: {auth}
	} = useAppStore();

	const isAuthorized = useSelector(auth.getIsAuthorized);

	const {state}: any = useLocation();

	if (isAuthorized) {
		return <Navigate to={state?.from || '/'} replace />;
	}

	return <Outlet />;
}

export default RequireGuest;
