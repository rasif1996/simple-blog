import homeRoutes from '../../pages/Home/routes';
import loginRoutes from '../../pages/Login/routes';
import signupRoutes from '../../pages/Signup/routes';
import usersRoutes from '../../pages/Users/routes';
import notFoundRotes from '../../pages/NotFound/routes';

import RequireAuth from '../components/RequireAuth';
import RequireGuest from '../components/RequireGuest';

import Layout from '../layout';

const allRoutes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <RequireAuth />,
				children: [...homeRoutes, ...usersRoutes]
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
