import homeRoutes from '../../pages/Home/routes';
import loginRoutes from '../../pages/Login/routes';
import signupRoutes from '../../pages/Signup/routes';
import usersRoutes from '../../pages/Users/routes';

import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

import Layout from '../layout';

const allRoutes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <PrivateRoute />,
				children: [...homeRoutes, ...usersRoutes]
			},
			{
				path: '/',
				element: <PublicRoute />,
				children: [...loginRoutes, ...signupRoutes]
			}
		]
	}
];

export default allRoutes;
