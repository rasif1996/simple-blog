import {RouteObject} from 'react-router-dom';

import homeRoutes from '../../pages/Home/routes';
import loginRoutes from '../../pages/Login/routes';
import signupRoutes from '../../pages/Signup/routes';
import usersRoutes from '../../pages/Users/routes';
import notFoundRotes from '../../pages/NotFound/routes';
import accountRoutes from '../../pages/Account/routes';
import postsRoutes from '../../pages/Posts/routes';

import RequireAuth from '../components/RequireAuth';
import RequireGuest from '../components/RequireGuest';

import Layout from '../layout';

const allRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <RequireAuth />,
				children: [...homeRoutes, ...usersRoutes, ...accountRoutes, ...postsRoutes]
			},
			{
				element: <RequireGuest />,
				children: [...loginRoutes, ...signupRoutes]
			},
			...notFoundRotes
		]
	}
];

export default allRoutes;
