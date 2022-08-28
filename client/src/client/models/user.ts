import type {RootModel} from '.';
import {createModel} from '@rematch/core';
import UserService from '../../services/UserService';
import {IUser, IInfo} from '../../types/models';

type UserStateType = {
	email: string;
	id: string;
	info: IInfo;
	users: IUser[];
};

const initialState: UserStateType = {
	email: '',
	id: '',
	info: null,
	users: []
};

const user = createModel<RootModel>()({
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
	effects: dispatch => ({
		async fetchUsers() {
			try {
				const users = await UserService.getUsers();

				dispatch.user.setUsers(users);
			} catch {
				dispatch.user.setUsers([]);
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

				dispatch.user.setInfo(newInfo);
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
});

export default user;
