import {CreatePostFormType} from './forms';
import {IUser, IInfo, IPost} from './models';

export interface IAuthService {
	logout(): void;
}

export interface IUserService {
	getUsers(): Promise<IUser[]>;
	updateUser(info: FormData): Promise<IInfo>;
}

export interface IPostsService {
	getPosts(): Promise<IPost[]>;
	createPost(data: CreatePostFormType): void;
}
