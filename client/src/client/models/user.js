import UserService from 'services/UserService';

const initialState = {
	email: '',
	id: '',
	info: null,
	users: []
};

const user = {
	name: 'user',
	state: initialState,
	reducers: {
		login(state, payload) {
			return {...initialState, ...payload};
		},
		setUsers(state, payload) {
			state.users = [...payload];
		},
		setInfo(state, payload) {
			state.info = {...payload};
		}
	},
	effects: ({user}) => ({
		async fetchUsers() {
			try {
				const users = await UserService.getUsers();

				user.setUsers(users);
			} catch {
				user.setUsers([]);
			}
		},
		async updateUser(info, store) {
			try {
				const newInfo = await UserService.updateUser(store.user.id, info);

				user.setInfo(newInfo);
			} catch (e) {
				console.log(e);
			}
		}
	}),
	selectors: slice => ({
		getUsers() {
			return slice(state => state.users);
		},
		getInfo() {
			return slice(state => state.info);
		}
	})
};

export default user;
