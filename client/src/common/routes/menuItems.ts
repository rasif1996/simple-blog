import {IMenuItem} from '../../types';

const menuItems: IMenuItem[] = [
	{
		label: 'Home',
		to: '/'
	},
	{
		label: 'Posts',
		to: '/posts',
		authRequired: true
	},
	{
		label: 'Account',
		to: '/account',
		authRequired: true
	},
	{
		label: 'Users',
		to: '/users'
	},
	{
		label: 'Login',
		to: '/login'
	},
	{
		label: 'Signup',
		to: '/signup'
	}
];

export default menuItems;
