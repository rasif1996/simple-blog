import {CreatePostFormType} from './forms';
import {IUser, IInfo} from './models';

export interface IAuthService {
	logout(): void;
}

export interface IUserService {
	getUsers(): Promise<IUser[]>;
	updateUser(info: FormData): Promise<IInfo>;
}

export interface IPostsService {
	createPost(data: CreatePostFormType): void;
}
