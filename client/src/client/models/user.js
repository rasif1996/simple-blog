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
		async updateUser(info) {
			try {
				const {image, ...rest} = info;

				const formData = new FormData();

				if (image.length) {
					formData.append('image', image[0]);
				}

				formData.append('info', JSON.stringify(rest));

				const newInfo = await UserService.updateUser(formData);

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
