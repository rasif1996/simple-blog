import UserService from '../../services/UserService';

const initialState = {
	email: '',
	id: '',
	users: []
};

const user = {
	name: 'user',
	state: initialState,
	reducers: {
		login(state, payload) {
			state.email = payload.email;
			state.id = payload.id;
		},
		logout(state) {
			state.email = '';
			state.id = '';
		},
		setUsers(state, payload) {
			state.users = [...payload];
		}
	},
	effects: ({user}) => ({
		async fetchUsers(payload, store) {
			try {
				const data = await UserService.getUsers();

				user.setUsers(data.users);
			} catch {
				user.setUsers([]);
			}
		}
	}),
	selectors: slice => ({
		getUsers() {
			return slice(state => state.users);
		}
	})
};

export default user;
