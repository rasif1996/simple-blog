import api from '../../http';

const initialState = {
	email: '',
	id: '',
	users: []
};

const user = {
	name: 'user',
	state: initialState,
	reducers: {
		setUser(state, payload) {
			state.email = payload.email;
			state.id = payload.id;
		},
		clearUser(state) {
			state.email = '';
			state.id = '';
		},
		setUsers(state, payload) {
			state.users = [...payload];
		}
	},
	effects: dispatch => ({
		async fetchUsers(payload, store) {
			const {data} = await api.users.getUsers();

			dispatch.user.setUsers(data.users);
		}
	}),
	selectors: slice => ({
		getUsers() {
			return slice(state => state.users);
		}
	})
};

export default user;
