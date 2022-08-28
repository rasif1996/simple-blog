import {Models} from '@rematch/core';
import auth from './auth';
import user from './user';
import posts from './posts';

export interface RootModel extends Models<RootModel> {
	auth: typeof auth;
	user: typeof user;
	posts: typeof posts;
}

export const models: RootModel = {auth, user, posts};
