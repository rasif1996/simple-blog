import type {RootModel} from '.';
import {createModel} from '@rematch/core';
import {CreatePostFormType} from '../../types/forms';
import PostsService from '../../services/PostsService';
import {IPost} from '../../types/models';
import history from '../../common/history';

type PostsStateType = {
	posts: IPost[];
};

const initialState: PostsStateType = {
	posts: []
};

const posts = createModel<RootModel>()({
	name: 'posts',
	state: initialState,
	reducers: {},
	effects: dispatch => ({
		async createPost(data: CreatePostFormType) {
			await PostsService.createPost(data);

			history.push('/posts');
		}
	})
});

export default posts;
