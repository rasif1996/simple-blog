import {useEffect} from 'react';
import {useSelector, useStore} from 'react-redux';
import {Outlet, useNavigate, useLocation} from 'react-router-dom';

function PrivateRoute() {
	const {
		select: {auth}
	} = useStore();

	const isAuth = useSelector(auth.getIsAuth);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!isAuth) {
			navigate('/login', {state: {from: location.pathname}});
		}
	}, [isAuth]);

	return <Outlet />;
}

export default PrivateRoute;
