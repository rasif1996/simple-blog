import {useEffect} from 'react';
import {useSelector, useStore} from 'react-redux';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';

function PublicRoute() {
	const {
		select: {auth}
	} = useStore();

	const isAuth = useSelector(auth.getIsAuth);

	const navigate = useNavigate();
	const {state} = useLocation();

	useEffect(() => {
		if (isAuth) {
			navigate(state?.from || '/', {replace: true});
		}
	}, [isAuth]);

	return <Outlet />;
}

export default PublicRoute;
