import IMenuItem from '../../types/IMenuItem';

const menuItems: IMenuItem[] = [
	{
		label: 'Home',
		to: '/'
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
